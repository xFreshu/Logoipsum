import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserProvider'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import {
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledTextarea,
  StyledSelect,
  StyledButtonAuth,
} from '../../components/organisms/Auth/AuthFormInputs.styles'
import Header from '../../components/atoms/Header/Header'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddQuestion = () => {
  const { authUser } = useContext(UserContext)
  const [getTopics, setTopics] = useState([])

  console.log(authUser)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/topics/')
      .then((res) => {
        setTopics(res.data.topics)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const getUserId = authUser.id
  const onSubmit = (data: any) => {
    axios
      .post('http://localhost:5000/api/questions', {
        ...data,
        creator: getUserId,
      })
      .then((r) => r)
      .catch((e) => e)
    console.log(data)
  }

  const topics = getTopics.map((item) => {
    // @ts-ignore
    return { id: item._id, name: item.name }
  })

  return (
    <AppTemplate>
      <AppCard primary>
        <Header headerName={'Dodaj pytanie'} />
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel>Tytuł</StyledLabel>
          <StyledInput {...register('name')} />
          <StyledLabel>Treść</StyledLabel>
          <StyledTextarea {...register('body')} />
          <StyledLabel>Temat</StyledLabel>
          <StyledSelect {...register('topic', { required: true })}>
            <option value='' />
            {topics.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              )
            })}
          </StyledSelect>
          {errors.exampleRequired && <span>This field is required</span>}
          <StyledButtonAuth>Dodaj</StyledButtonAuth>
        </StyledForm>
      </AppCard>
    </AppTemplate>
  )
}

export default AddQuestion
