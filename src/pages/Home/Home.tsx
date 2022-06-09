import React from 'react'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppCard, WelcomeSection } from './Home.styles'

const DUMMY_CATEGORIES = [
  { id: 1, name: 'Bryły przestrzenne', questions: 2 },
  { id: 2, name: 'Ciąg arytmetyczny', questions: 1 },
  { id: 3, name: 'Figury', questions: 0 },
  { id: 4, name: 'Funkcje', questions: 10 },
  { id: 5, name: 'Funkcje liniowe', questions: 5 },
  { id: 6, name: 'Funkcje kwadratowe', questions: 9 },
  { id: 7, name: 'Konstukcje matematyczne', question: 2 },
  { id: 8, name: 'Logika', questions: 5 },
  { id: 9, name: 'Pierwiastki', questions: 3 },
  { id: 10, name: 'Procenty', questions: 1 },
  { id: 11, name: 'Równania', questions: 1 },
  { id: 12, name: 'Twierdzenie Pitagorasa', questions: 3 },
  { id: 13, name: 'Twierdzenie Talesa', questions: 4 },
  { id: 14, name: 'Wyrażenia algebraiczne', questions: 1 },
]

const CardCategories = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6fff8;
  height: 120px;
  width: 120px;
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

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Home = () => {
  return (
    <AppTemplate>
      <AppCard>
        <WelcomeSection>
          <h1>Hi [Your name] 👋</h1>
          <h2>Witaj w aplikacji, w której możesz tworzyć pytania, albo pomagać innym!</h2>
          <h3>Poniżej, temaaty idk.</h3>
        </WelcomeSection>
        <CategoriesContainer>
          {DUMMY_CATEGORIES.map((item) => (
            <CardCategories key={item.id} to={item.name}>
              <span>{item.name.substring(0, 2)}</span>
              <span>{item.name}</span>
              <span>Liczba pytań: {item.questions}</span>
            </CardCategories>
          ))}
        </CategoriesContainer>
      </AppCard>
    </AppTemplate>
  )
}

export default Home
