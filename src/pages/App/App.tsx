import React from 'react'
import AuthCard from '../../components/organisms/Auth/AuthCard/AuthCard'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/atoms/AppWrapper/AppWrapper'
import AuthRegister from '../../components/organisms/Auth/AuthRegister/AuthRegister'
import AuthLogin from '../../components/organisms/Auth/AuthLogin/AuthLogin'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Route path='/login' element={<AuthLogin />} />
        <Route path='/register' element={<AuthRegister />} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
