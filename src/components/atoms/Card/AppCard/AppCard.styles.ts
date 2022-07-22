import { Card } from '../Card.styles'
import styled from 'styled-components'

interface AppCardProps {
  primary?: boolean
}

export const AppCard = styled(Card)<AppCardProps>`
  background-color: ${({ primary, theme }) => (primary ? theme.primary : '#fff')};
  color: ${({ primary, theme }) => (primary ? theme.secondary : '#000')};
  padding: 0;
  height: 70vh;
  max-height: 600px;
  overflow: scroll;
  margin-bottom: 100px;
  ::-webkit-scrollbar {
    display: none;
  }
`
