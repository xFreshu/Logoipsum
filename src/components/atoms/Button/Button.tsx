import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

interface ButtonProps {
  buttonName: string
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
  }
`

const Button = ({ buttonName, buttonType }: ButtonProps) => {
  if (buttonType === 'AuthButton') {
    return <StyledButton>{buttonName}</StyledButton>
  } else {
    return <StyledButton>Whot</StyledButton>
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
}

export default Button
