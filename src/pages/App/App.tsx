import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/atoms/AppWrapper/AppWrapper'
import AuthRegister from '../AuthRegister/AuthRegister'
import AuthLogin from '../AuthLogin/AuthLogin'
import Home from '../Home/Home'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <>
          <Route path='/login' element={<AuthLogin />} />
          <Route path='/register' element={<AuthRegister />} />
          <Route path='/' element={<Home />} />
        </>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
