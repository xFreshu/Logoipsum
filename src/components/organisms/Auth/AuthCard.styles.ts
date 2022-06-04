import styled, { keyframes } from 'styled-components'
import { Card } from '../../atoms/Card/Card.styles'

export const Header = styled.h1`
  text-align: center;
  margin-top: 10px;
`

const OpeningAnimation = keyframes`
  0% {left: -100%}
  100%{left: 0}
`

export const AuthCardStyled = styled(Card)`
  animation-name: ${OpeningAnimation};
  animation-duration: 1s;
  position: relative;
`
