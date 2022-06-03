import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage'
const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  margin-top: 4rem;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.secondary};
  height: 5rem;
  font-size: 2rem;
  outline: none;
  border-radius: 10px;
  padding: 0 5px;
  transition: 0.3s;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.88, 0.61);
  :focus {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`

type FormInputProps = {
  inputId: string
  labelName: string
  require: boolean
  type: string
}

const FormInput = ({ inputId, labelName, require, type }: FormInputProps, ) => {
  const {
    register,
    formState: { errors },
  } = useForm()
  return (
    <>
      <StyledLabel htmlFor={inputId}>{labelName}</StyledLabel>
      <StyledInput type={type} id={inputId} {...register('1', { required: true })} />

    </>
  )
}

FormInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  require: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
}

export default FormInput
