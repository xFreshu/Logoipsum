import React from 'react'
import { useForm } from 'react-hook-form'
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonAuth,
} from '../../components/organisms/Auth/AuthFormInputs.styles'
import AuthCard from '../../components/organisms/Auth/AuthCard'
import ErrorFormMessage from '../../components/atoms/ErrorMessage/ErrorMessage'
import { Link, useNavigate } from 'react-router-dom'

const AuthRegister = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data))
    navigate('/')
  }
  return (
    <>
      <AuthCard headerName='Rejestracja'>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor='login'>Login</StyledLabel>
          <StyledInput type='text' id='login' {...register('login', { required: true })} />
          {errors.login && <ErrorFormMessage errorMsg='Te pole jest wymagane' />}
          <StyledLabel htmlFor='password'>Hasło</StyledLabel>
          <StyledInput
            type='password'
            id='password'
            {...register('password', { required: true })}
          />
          {errors.password && <ErrorFormMessage errorMsg='Te pole jest wymagane' />}
          <StyledLabel htmlFor='email'>E-mail</StyledLabel>
          <StyledInput type='email' id='email' {...register('email', { required: true })} />
          {errors.email && <ErrorFormMessage errorMsg='Te pole jest wymagane' />}
          <div>
            <StyledButtonAuth>Zarejestruj</StyledButtonAuth>
            <span>Jeśli masz konto to...</span>
            <StyledButtonAuth to='/login' as={Link}>
              Zaloguj
            </StyledButtonAuth>
          </div>
        </StyledForm>
      </AuthCard>
    </>
  )
}

export default AuthRegister
