import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthCard from '../../components/organisms/Auth/AuthCard'
import ErrorMessage from '../../components/atoms/ErrorMessage/ErrorMessage'
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonAuth,
} from '../../components/organisms/Auth/AuthFormInputs.styles'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'
import ErrorPopout from '../../components/atoms/ErrorPopout/ErrorPopout'
import axios from 'axios'

const AuthLogin: React.FC = () => {
  const [errorState, setErrorState] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { authUser, setAuthUser } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    try {
      axios
        .post('http://localhost:5000/api/users/login', data)
        .then((res) => {
          console.log(res)
          setAuthUser(res.data.user)
          navigate('/home')
        })
        .catch((err) => {
          setErrorMessage(err.message)
          setErrorState(true)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {errorState ? <ErrorPopout error={errorMessage} /> : null}
      <AuthCard headerName='Zaloguj'>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor='login'>Login</StyledLabel>
          <StyledInput type='text' id='login' {...register('login', { required: true })} />
          {errors.login && <ErrorMessage errorMsg='Te pole jest wymagane' />}
          <StyledLabel htmlFor='password'>Password</StyledLabel>
          <StyledInput
            type='password'
            id='password'
            {...register('password', { required: true })}
          />
          {errors.password && <ErrorMessage errorMsg='Te pole jest wymagane' />}
          <div>
            <StyledButtonAuth type='submit'>Zaloguj</StyledButtonAuth>
            <span>Jeśli nie masz konta to...</span>
            <StyledButtonAuth to='/register' as={Link} style={{ marginBottom: '2rem' }}>
              Rejestracja
            </StyledButtonAuth>
          </div>
        </StyledForm>
      </AuthCard>
    </>
  )
}

export default AuthLogin
