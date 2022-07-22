import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledCardCategories = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6fff8;
  height: 120px;
  min-width: 120px;
  width: auto;
  margin: 10px;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  text-decoration: none;
  color: #000;
  :hover {
    cursor: pointer;
  }
  span {
    padding: 0 10px;
    :nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      color: ${({ theme }) => theme.secondary};
      background-color: ${({ theme }) => theme.primary};
      border-radius: 100%;
      font-weight: 700;
    }
    :nth-child(2) {
      margin: 10px 0;
      font-weight: 700;
      font-size: 1.6rem;
      text-align: center;
    }
  }
`
