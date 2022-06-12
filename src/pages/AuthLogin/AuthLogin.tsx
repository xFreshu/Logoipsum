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
import styled, { keyframes } from 'styled-components'
import { UserContext } from '../../context/UserProvider'

const AuthLogin: React.FC = () => {
  const [errorState, setErrorState] = useState(false)
  const { setAuthUser } = useContext(UserContext)
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem('user'))
  const getUser = userData || {}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(data)
    console.log(getUser)
    setAuthUser(data)
    if (data.login === getUser.login && data.password === getUser.password) {
      navigate('/home')
    } else {
      setErrorState(true)
    }
  }

  const OpenPopout = keyframes`
    0%  {top: -20%} 
    50% {top: 5%}
    100% {top: -20%}
  `

  const ErrorPopout = styled.div`
    top: -20%;
    position: fixed;
    border: solid 3px ${({ theme }) => theme.error};
    font-size: 1.6rem;
    padding: 2rem 6rem;
    border-radius: 10px;
    background-color: #ffa9ab;
    font-weight: 700;
    color: ${({ theme }) => theme.error};
    animation-name: ${OpenPopout};
    animation-duration: 3s;
    z-index: 1000;
  `

  return (
    <>
      {errorState ? <ErrorPopout>Nie znaleziono użytkownika</ErrorPopout> : null}
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
            <StyledButtonAuth to='/register' as={Link}>
              Rejestracja
            </StyledButtonAuth>
          </div>
        </StyledForm>
      </AuthCard>
    </>
  )
}

export default AuthLogin
