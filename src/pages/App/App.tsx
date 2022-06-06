import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/template/AppWrapper/AppWrapper'
import AuthRegister from '../AuthRegister/AuthRegister'
import AuthLogin from '../AuthLogin/AuthLogin'
import Home from '../Home/Home'

const App = () => {
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
