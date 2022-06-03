import React from 'react'
import styled from 'styled-components'
import Button from '../../../atoms/Button/Button'
import { useForm } from 'react-hook-form'
import AuthCard from '../AuthCard/AuthCard'
import ErrorMessage from '../../../atoms/ErrorMessage/ErrorMessage'
import { StyledForm, StyledLabel, StyledInput } from '../AuthFormInputs.styles'

const AuthLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <AuthCard headerName='Zaloguj'>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor='login'>Login</StyledLabel>
        <StyledInput type='text' id='login' {...register('login', { required: true })} />
        {errors.login && <ErrorMessage errorMsg='This field is required' />}
        <StyledLabel htmlFor='password'>Password</StyledLabel>
        <StyledInput type='password' id='password' {...register('password', { required: true })} />
        {errors.password && <ErrorMessage errorMsg='This field is required' />}
        <div>
          <Button buttonType='AuthButton' />
          <span>Jeśli nie masz konta to...</span>
          <Button />
        </div>
      </StyledForm>
    </AuthCard>
  )
}

export default AuthLogin
