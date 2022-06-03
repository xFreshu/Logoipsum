import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ButtonProps {
  buttonType?: string
}

const StyledButton = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.17, 0.67, 0.88, 0.61);
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    border: solid 2px ${({ theme }) => theme.secondary};
    cursor: pointer;
  }
  :first-child {
    margin-top: 3rem;
  }
`
const StyledLink = styled(StyledButton)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = ({ buttonType }: ButtonProps) => {
  if (buttonType === 'AuthButton') {
    return <StyledButton>Zaloguj</StyledButton>
  } else {
    return (
      <StyledLink as={Link} to='/register'>
        Zarejestruj
      </StyledLink>
    )
  }
}

Button.propTypes = {
  buttonType: PropTypes.string,
}

export default Button
