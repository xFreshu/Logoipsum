import React, { useEffect, useState } from 'react'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { BackButton } from '../Topics/Topics.styles'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/atoms/Header/Header'

type QuestionPageProps = {
  setRefreshKey: any
  refreshKey: number
}

const QuestionPage = ({ setRefreshKey, refreshKey }: QuestionPageProps) => {
  const [getQuestion, setQuestion] = useState({ name: '', body: '' })
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:5000/api/questions/${id}`).then((res) => {
      setQuestion(res.data)
    })
  }, [])
  const handleDelete = () => {
    console.log(id)
    axios
      .delete(`http://localhost:5000/api/questions/${id}`)
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
    setRefreshKey((refreshKey = refreshKey + 1))
    console.log(refreshKey)
    navigate(-2)
  }
  return (
    <AppTemplate>
      <AppCard>
        <Header headerName={getQuestion.name} whiteHeader />
        <BackButton onClick={() => navigate(-1)}>Cofnij</BackButton>
        <BackButton onClick={handleDelete}>Delete</BackButton>
      </AppCard>
    </AppTemplate>
  )
}

export default QuestionPage
