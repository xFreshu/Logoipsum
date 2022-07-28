import React, { useEffect, useState } from 'react'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { BackButton } from '../Topics/Topics.styles'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../../components/atoms/Header/Header'
import {
  StyledButtonAuth,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextarea,
} from '../../components/organisms/Auth/AuthFormInputs.styles'
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage'
import { useForm } from 'react-hook-form'

type QuestionPageProps = {
  setRefreshKey: any
  refreshKey: number
}

const QuestionPage = ({ setRefreshKey, refreshKey }: QuestionPageProps) => {
  const [getQuestion, setQuestion] = useState({
    name: '',
    body: '',
    id: '',
    downvotes: 0,
    upvotes: 0,
  })
  const [isEdit, setIsEdit] = useState(true)

  const { id } = useParams()
  const navigate = useNavigate()

  //Get specific question by ID
  useEffect(() => {
    axios.get(`http://localhost:5000/api/questions/${id}`).then((res) => {
      setQuestion(res.data)
    })
  }, [])
  const handleEdit = () => {
    setIsEdit(!isEdit)
    console.log(isEdit)
  }

  //Delete question and back to the topics
  const handleDelete = () => {
    console.log(id)
    axios
      .delete(`http://localhost:5000/api/questions/${id}`)
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
    setRefreshKey((refreshKey = refreshKey + 1))
    console.log(refreshKey)
    navigate(-1)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    axios
      .patch(`http://localhost:5000/api/questions/${id}`, data)
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
    setIsEdit(true)
  }

  const handleUpvote = () => {
    axios
      .patch(`http://localhost:5000/api/questions/${id}/contented`, {
        upvote: getQuestion.upvotes + 1,
        downvote: getQuestion.downvotes,
      })
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
    setQuestion({ ...getQuestion, upvotes: getQuestion.downvotes + 1 })
  }

  const handleDownvote = () => {
    axios
      .patch(`http://localhost:5000/api/questions/${id}/contented`, {
        upvote: getQuestion.upvotes,
        downvote: getQuestion.downvotes + 1,
      })
      .then((r) => console.log(r))
      .catch((err) => console.log(err))
    setQuestion({ ...getQuestion, downvotes: getQuestion.downvotes + 1 })
  }

  return (
    <AppTemplate>
      <AppCard>
        <Header
          headerName={isEdit ? `Pytanie o identyfiaktorze: ${getQuestion.id}` : 'Edycja'}
          whiteHeader
        />
        <BackButton onClick={() => navigate(-1)}>Cofnij</BackButton>
        <BackButton onClick={handleDelete}>Delete</BackButton>
        <BackButton onClick={handleEdit}>Edytuj</BackButton>
        <BackButton onClick={handleUpvote}>👍 {getQuestion.upvotes}</BackButton>
        <BackButton onClick={handleDownvote}>👎 {getQuestion.downvotes}</BackButton>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Tytuł</StyledLabel>
          <StyledInput
            {...register('name', { required: true })}
            defaultValue={isEdit ? getQuestion.name : ''}
            disabled={isEdit}
          />
          {errors.name && <ErrorMessage errorMsg='Te pole jest wymagane' />}
          <StyledLabel>Treść</StyledLabel>
          <StyledTextarea
            {...register('body', { required: true })}
            defaultValue={isEdit ? getQuestion.body : ''}
            disabled={isEdit}
          />
          {errors.body && <ErrorMessage errorMsg='Te pole jest wymagane' />}
          {!isEdit && <StyledButtonAuth style={{ margin: '2rem auto' }}>Dodaj</StyledButtonAuth>}
        </StyledForm>
      </AppCard>
    </AppTemplate>
  )
}

export default QuestionPage
