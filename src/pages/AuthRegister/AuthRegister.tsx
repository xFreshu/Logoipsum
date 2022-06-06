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
   navigate('/login')
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
          <StyledLabel htmlFor='repeatPassword'>Powtórz hasło</StyledLabel>
          <StyledInput
            type='password'
            id='repeatPassword'
            {...register('repeatPassword', { required: true })}
          />
          {errors.repeatPassword && <ErrorFormMessage errorMsg='Te pole jest wymagane' />}
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
