import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/template/AppWrapper/AppWrapper'
import AuthRegister from '../AuthRegister/AuthRegister'
import AuthLogin from '../AuthLogin/AuthLogin'
import Home from '../Home/Home'
import MobileNavigation from '../../components/organisms/MobileNavigation/MobileNavigation'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <>
          <Route path='/login' element={<AuthLogin />} />
          <Route path='/register' element={<AuthRegister />} />
          <Route path='/profile' element={<h1>profile</h1>} />
          <Route path='/add' element={<h1>add</h1>} />
          <Route path='/home' element={<Home />} />
        </>
      </AppWrapper>
      <MobileNavigation />
    </ThemeProvider>
  )
}

export default App
