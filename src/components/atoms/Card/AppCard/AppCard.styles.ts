import { Card } from '../Card.styles'
import styled from 'styled-components'

export const AppCard = styled(Card)`
  background-color: #fff;
  padding: 0;
  height: 70vh;
  max-height: 600px;
  overflow: scroll;
  margin-bottom: 100px;
  ::-webkit-scrollbar {
    display: none;
  }
`
