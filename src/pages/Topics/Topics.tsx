import React, { useState, useEffect } from 'react'
import { AppCard } from '../Home/Home.styles'
import { useParams } from 'react-router-dom'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { Header, BackToTopics } from './Topics.styles'
import axios from 'axios'
import Question from '../../components/molecules/Question/Question'

const Topics = () => {
  const [getTopic, setTopic] = useState({ id: '', name: '', topics: [] })
  const [getQuestions, setQuestions] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/topics/${id}`)
      .then((res) => {
        console.log(res.data)
        setTopic(res.data)
        setQuestions(res.data.topics)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <AppTemplate>
        <AppCard>
          <Header>{`${getTopic.name}, liczba pytań ${getTopic.topics.length}` || 'Loading'}</Header>
          <BackToTopics to='/home'>Cofnij</BackToTopics>
        </AppCard>
      </AppTemplate>
    </>
  )
}

export default Topics
