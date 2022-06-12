import styled, { keyframes } from 'styled-components'

const OpenPopout = keyframes`
    0%  {top: -20%} 
    50% {top: 5%}
    100% {top: -20%}
  `

export const ErrorPopoutStyled = styled.div`
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
