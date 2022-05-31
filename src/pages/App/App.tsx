import React from 'react'
import { Wrapper } from './App.styles'
import AuthCard from '../../components/organisms/AuthCard/AuthCard'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AuthCard />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
