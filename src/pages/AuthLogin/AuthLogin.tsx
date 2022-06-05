import React from 'react'
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

const AuthLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(data)
    navigate('/')
  }

  return (
    <AuthCard headerName='Zaloguj'>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor='login'>Login</StyledLabel>
        <StyledInput type='text' id='login' {...register('login', { required: true })} />
        {errors.login && <ErrorMessage errorMsg='Te pole jest wymagane' />}
        <StyledLabel htmlFor='password'>Password</StyledLabel>
        <StyledInput type='password' id='password' {...register('password', { required: true })} />
        {errors.password && <ErrorMessage errorMsg='Te pole jest wymagane' />}
        <div>
          <StyledButtonAuth type='submit'>Zaloguj</StyledButtonAuth>
          <span>Jeśli nie masz konta to...</span>
          <StyledButtonAuth to='/register' as={Link}>
            Rejestracja
          </StyledButtonAuth>
        </div>
      </StyledForm>
    </AuthCard>
  )
}

export default AuthLogin
