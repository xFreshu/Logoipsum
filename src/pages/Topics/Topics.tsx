import React, { useState, useEffect } from 'react'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import { useParams } from 'react-router-dom'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { BackToTopics } from './Topics.styles'
import axios from 'axios'
import Question from '../../components/molecules/Question/Question'
import Header from '../../components/atoms/Header/Header'

// /topicId/:id
const Topics = () => {
  const [getTopic, setTopic] = useState({ id: '', name: '', level: '', usersQuestions: [] })
  const [getQuestions, setQuestions] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/topics/${id}`)
      .then((res) => {
        setTopic(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    axios.get(`http://localhost:5000/api/topics/topicId/${id}`).then((res) => {
      console.log(res.data.questions)
      setQuestions(res.data.questions)
    })
  }, [])
  return (
    <>
      <AppTemplate>
        <AppCard>
          <Header
            headerName={`${getTopic.name}, liczba pytań ${getQuestions.length}` || 'Loading'}
          />
          <BackToTopics to='/home'>Cofnij</BackToTopics>
          <>
            {getQuestions.map(({ name, body, id, creator, answers, upvotes, downvotes }) => (
              <Question
                title={name}
                description={body}
                id={id}
                upvote={upvotes}
                downvote={downvotes}
                user={creator}
                answers={answers}
                key={id}
                creator={creator}
              />
            ))}
          </>
        </AppCard>
      </AppTemplate>
    </>
  )
}

export default Topics
