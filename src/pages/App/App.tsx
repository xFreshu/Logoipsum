import React from 'react'
import AuthCard from '../../components/organisms/AuthCard/AuthCard'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/atoms/AppWrapper/AppWrapper'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Route path='/' element={<AuthCard />} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
