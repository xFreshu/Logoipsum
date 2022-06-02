import React from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button/Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    span {
      font-size: 1.3rem;
      margin: 20px;
      font-weight: 700;
      :before {
        position: absolute;
        top: 50%;
        left: -20px;
        transform: translateY(-50%);
        content: '';
        display: inline-block;
        width: 22vw;
        max-width: 200px;
        height: 2px;
        background-color: ${({ theme }) => theme.secondary};
      }
      :after {
        position: absolute;
        top: 50%;
        right: -20px;
        transform: translateY(-50%);
        content: '';
        display: inline-block;
        width: 22vw;
        max-width: 200px;
        height: 2px;
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`
const StyledLabel = styled.label`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: solid 2px ${({ theme }) => theme.secondary};
  margin-bottom: 4rem;
  height: 5rem;
  font-size: 2rem;
  outline: none;
  border-radius: 10px;
  padding: 0 5px;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.88, 0.61);
  :focus {
    background-color: ${({ theme }) => theme.secondary};
  }
`

const AuthLogin: React.FC = () => {
  return (
    <StyledForm>
      <StyledLabel htmlFor='login'>Login</StyledLabel>
      <StyledInput type='text' id='login' />
      <StyledLabel htmlFor='password'>Password</StyledLabel>
      <StyledInput type='password' id='login' />
      <div>
        <Button buttonName='Login' buttonType='AuthButton' />
        <span>Jeśli nie masz konta to...</span>
        <Button buttonName='Login' />
      </div>
    </StyledForm>
  )
}

export default AuthLogin
