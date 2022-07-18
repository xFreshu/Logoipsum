import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import AppTemplate from '../../components/template/AppTemplate/AppTemplate'
import { AppCard, WelcomeSection } from './Home.styles'
import CategoriesContainer from '../../components/organisms/CategoriesContainer/CategoriesContainer'
import { UserContext } from '../../context/UserProvider'
import axios from 'axios'

const Home = () => {
  const [getTopics, setTopics] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { authUser } = useContext(UserContext)

  useEffect(() => {
    try {
      axios
        .get('http://localhost:5000/api/topics')
        .then((res) => {
          setTopics(res.data.topics)
          setIsLoading(true)
          console.log(res.data.topics)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <AppTemplate>
      <AppCard>
        <WelcomeSection>
          <h1>Hi, {authUser.login || 'unauthorized'} 👋</h1>
          <h2>Witaj w aplikacji, w której możesz tworzyć pytania, albo pomagać innym!</h2>
          <h3>Poniżej, temaaty idk.</h3>
        </WelcomeSection>
        {isLoading ? <CategoriesContainer categories={getTopics} /> : <div>Cannot get topics</div>}
      </AppCard>
    </AppTemplate>
  )
}

export default Home
