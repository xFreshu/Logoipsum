import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { AppCard, WelcomeSection } from './Home.styles'
import CategoriesContainer from '../../components/organisms/CategoriesContainer/CategoriesContainer'
import { UserContext } from '../../context/UserProvider'

type HomeProps = {
  DUMMY_CATEGORIES: Array<{
    id: number
    name: string
    questions: string
  }>
}

const Home = ({ DUMMY_CATEGORIES }: HomeProps) => {
  const { authUser } = useContext(UserContext)
  return (
    <AppTemplate>
      <AppCard>
        <WelcomeSection>
          <h1>Hi, {authUser.login || 'unauthorized'} 👋</h1>
          <h2>Witaj w aplikacji, w której możesz tworzyć pytania, albo pomagać innym!</h2>
          <h3>Poniżej, temaaty idk.</h3>
        </WelcomeSection>
        <CategoriesContainer categories={DUMMY_CATEGORIES} />
      </AppCard>
    </AppTemplate>
  )
}

Home.propTypes = {
  DUMMY_CATEGORIES: PropTypes.array.isRequired,
}

export default Home
