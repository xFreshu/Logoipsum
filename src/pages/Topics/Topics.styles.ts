import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackToTopics = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  margin: 1rem;
  font-size: 1.4rem;
  border-radius: 10px;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 10px;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.primary};
  }
`
