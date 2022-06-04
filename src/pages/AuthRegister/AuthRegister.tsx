import React from 'react'
import { useForm } from 'react-hook-form'
import { StyledForm, StyledLabel, StyledInput } from '../../components/organisms/Auth/AuthFormInputs.styles'
import AuthCard from '../../components/organisms/Auth/AuthCard'
import ErrorFormMessage from '../../components/atoms/ErrorMessage/ErrorMessage'

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
        <StyledInput
          type='repeatPassword'
          id='repeatPassword'
          {...register('repeatPassword', { required: true })}
        />
        {errors.repeatPassword && <ErrorFormMessage errorMsg='This field is required' />}
        <div>1</div>
      </StyledForm>
    </AuthCard>
  )
}

export default AuthRegister
