import styled from 'styled-components'
import { Card } from '../../components/atoms/Card/Card.styles'

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

export const WelcomeSection = styled.div`
  padding: 20px;
  h1 {
    margin-bottom: 10px;
    font-size: 2rem;
  }
  h2 {
    font-weight: 400;
    text-align: justify;
    font-size: 1.6rem;
  }
  h3 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 1.3rem;
  }
`
