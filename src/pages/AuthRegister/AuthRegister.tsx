import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButtonAuth,
} from '../../components/organisms/Auth/AuthFormInputs.styles'
import styled, { keyframes } from 'styled-components'
import AuthCard from '../../components/organisms/Auth/AuthCard'
import ErrorFormMessage from '../../components/atoms/ErrorMessage/ErrorMessage'
import { Link } from 'react-router-dom'

const OpeningAnimation = keyframes`
  0% {top: -5%}
  30% {top: 5%}
  70% {top: 5%}
  100% {top: -20%}
`

interface PopoutProps {
  pass?: boolean
}

const AlertPopout = styled.div<PopoutProps>`
  background-color: ${({ pass }) => (pass ? 'rgb(250, 156, 160)' : '#a9ce72')};
  border: ${({ pass }) =>
    pass ? 'solid 3px ${({ theme }) => theme.error}' : 'solid 3px ${({ theme }) => theme.pass}'};
  position: fixed;
  top: -20%;
  animation-name: ${OpeningAnimation};
  animation-duration: 6s;
  width: 400px;
  z-index: 100;
  padding: 20px 0;
  text-align: center;
  border-radius: 10px;
  color: ${({ pass }) =>
    pass ? '${({ theme }) => theme.error}' : '${({ theme }) => theme.warning}'};
  font-weight: 700;
  font-size: 1.4rem;
`

const AuthRegister = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [errorCode, setErrorCode] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    if (data.password === data.repeatPassword) {
      setIsRegistered(true)
      setErrorCode('Poprawnie założone konto')
      setTimeout(() => setIsRegistered(false), 6000)
    } else {
      setIsRegistered(true)
      setErrorCode('Błędnie powtórzone hasło')
      console.log('not')
    }
  }
  return (
    <>
      {isRegistered ? <AlertPopout>{errorCode}</AlertPopout> : null}
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
