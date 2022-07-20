import React, { useState, useEffect } from 'react'
import { AppCard } from '../Home/Home.styles'
import { useParams } from 'react-router-dom'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { Header, BackToTopics } from './Topics.styles'
import axios from 'axios'
import Question from '../../components/molecules/Question/Question'

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
          <Header>{`${getTopic.name}, liczba pytań ${getQuestions.length}` || 'Loading'}</Header>
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
