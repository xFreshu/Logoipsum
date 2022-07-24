import React, { useState, useEffect } from 'react'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import { useParams } from 'react-router-dom'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { LinkButton } from './Topics.styles'
import axios from 'axios'
import Question from '../../components/molecules/Question/Question'
import Header from '../../components/atoms/Header/Header'

type TopicsProps = {
  refreshKey: number
}

// /topicId/:id
const Topics = ({ refreshKey }: TopicsProps) => {
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
  }, [refreshKey])
  return (
    <>
      <AppTemplate>
        <AppCard>
          <Header
            headerName={`${getTopic.name}, liczba pytań ${getQuestions.length}` || 'Loading'}
            whiteHeader={true}
          />
          <LinkButton to='/home'>Cofnij</LinkButton>
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
                refreshKey={refreshKey}
              />
            ))}
          </>
        </AppCard>
      </AppTemplate>
    </>
  )
}

export default Topics
