import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../assets/theme'
import { Route } from 'react-router-dom'
import AppWrapper from '../../components/template/AppWrapper/AppWrapper'
import AuthRegister from '../AuthRegister/AuthRegister'
import AuthLogin from '../AuthLogin/AuthLogin'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import AddQuestion from '../Add-Question/Add-Question'
import Settings from '../Settings/Settings'
import UserProvider from '../../context/UserProvider'
import Topics from '../Topics/Topics'

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <>
            <Route path='/' element={<AuthLogin />} />
            <Route path='/register' element={<AuthRegister />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/add' element={<AddQuestion />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/home' element={<Home />} />
            <Route path='/topics/:id' element={<Topics />} />
          </>
        </AppWrapper>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
