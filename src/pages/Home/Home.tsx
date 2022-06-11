import React from 'react'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { AppCard, WelcomeSection } from './Home.styles'
import CategoriesContainer from '../../components/organisms/CategoriesContainer/CategoriesContainer'

const DUMMY_CATEGORIES = [
  { id: 1, name: 'Bryły przestrzenne', questions: '2' },
  { id: 2, name: 'Ciąg arytmetyczny', questions: '1' },
  { id: 3, name: 'Figury', questions: '0' },
  { id: 4, name: 'Funkcje', questions: '10' },
  { id: 5, name: 'Funkcje liniowe', questions: '5' },
  { id: 6, name: 'Funkcje kwadratowe', questions: '9' },
  { id: 7, name: 'Konstukcje matematyczne', question: '2' },
  { id: 8, name: 'Logika', questions: '5' },
  { id: 9, name: 'Pierwiastki', questions: '3' },
  { id: 10, name: 'Procenty', questions: '1' },
  { id: 11, name: 'Równania', questions: '1' },
  { id: 12, name: 'Twierdzenie Pitagorasa', questions: '3' },
  { id: 13, name: 'Twierdzenie Talesa', questions: '4' },
  { id: 14, name: 'Wyrażenia algebraiczne', questions: '1' },
]

const Home = () => {
  return (
    <AppTemplate>
      <AppCard>
        <WelcomeSection>
          <h1>Hi [Your name] 👋</h1>
          <h2>Witaj w aplikacji, w której możesz tworzyć pytania, albo pomagać innym!</h2>
          <h3>Poniżej, temaaty idk.</h3>
        </WelcomeSection>
        <CategoriesContainer categories={DUMMY_CATEGORIES} />
      </AppCard>
    </AppTemplate>
  )
}

export default Home
