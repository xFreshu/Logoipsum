import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { AppCard } from '../../components/atoms/Card/AppCard/AppCard.styles'
import Header from '../../components/atoms/Header/Header'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddQuestion = () => {
  const { authUser } = useContext(UserContext)

  console.log(authUser)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const getUserId = authUser.id
  const onSubmit = (data: any) => {
    axios
      .post('http://localhost:5000/api/questions', {
        ...data,
        creator: getUserId,
      })
      .then((r) => r)
      .catch((e) => e)
  }

  return (
    <AppTemplate>
      <AppCard>
        <Header headerName={'Dodaj pytanie'} />
        <h2>{authUser.login}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input {...register('name')} />
          <textarea {...register('body')} />
          {/* include validation with required or other standard HTML validation rules */}
          <select {...register('topic', { required: true })}>
            <option value='62d2e5f8db75c19e1ec43294'>A</option>
            <option value='B'>B</option>
          </select>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' />
        </form>
      </AppCard>
    </AppTemplate>
  )
}

export default AddQuestion
