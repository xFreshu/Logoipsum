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

  return (
    <>
      {errorState ? <ErrorPopout error='Nie znaleziono użytkownika' /> : null}
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
