import React from 'react'
import { useForm } from 'react-hook-form'
import { StyledForm, StyledLabel, StyledInput } from '../AuthFormInputs.styles'
import AuthCard from '../AuthCard/AuthCard'
import ErrorFormMessage from '../../../atoms/ErrorMessage/ErrorMessage'
import Button from '../../../atoms/Button/Button'

const AuthRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <AuthCard headerName='Rejestracja'>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor='login'>Login</StyledLabel>
        <StyledInput type='text' id='login' {...register('login', { required: true })} />
        {errors.login && <ErrorFormMessage errorMsg='This field is required' />}
        <StyledLabel htmlFor='password'>Hasło</StyledLabel>
        <StyledInput type='password' id='password' {...register('password', { required: true })} />
        {errors.password && <ErrorFormMessage errorMsg='This field is required' />}
        <StyledLabel htmlFor='repeatPassword'>Powtórz hasło</StyledLabel>
        <StyledInput type='repeatPassword' id='repeatPassword' {...register('repeatPassword', { required: true })} />
        {errors.repeatPassword && <ErrorFormMessage errorMsg='This field is required' />}
        <div>
          <Button />
          <span>Jeśli masz konto to...</span>
          <Button buttonType='AuthButton' />
        </div>
      </StyledForm>
    </AuthCard>
  )
}

export default AuthRegister
