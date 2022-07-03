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

const DUMMY_CATEGORIES = [
  { id: 1, name: 'Bryły przestrzenne', questions: '2' },
  { id: 2, name: 'Ciąg arytmetyczny', questions: '1' },
  { id: 3, name: 'Figury', questions: '0' },
  { id: 4, name: 'Funkcje', questions: '10' },
  { id: 5, name: 'Funkcje liniowe', questions: '5' },
  { id: 6, name: 'Funkcje kwadratowe', questions: '9' },
  { id: 7, name: 'Konstukcje matematyczne', questions: '5' },
  { id: 8, name: 'Logika', questions: '54' },
  { id: 9, name: 'Pierwiastki', questions: '3' },
  { id: 10, name: 'Procenty', questions: '1' },
  { id: 11, name: 'Równania', questions: '1' },
  { id: 12, name: 'Twierdzenie Pitagorasa', questions: '3' },
  { id: 13, name: 'Twierdzenie Talesa', questions: '4' },
  { id: 14, name: 'Wyrażenia algebraiczne', questions: '1' },
]
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
            <Route path='/home' element={<Home DUMMY_CATEGORIES={DUMMY_CATEGORIES} />} />
            <Route path='/topics/:id' element={<Topics DUMMY_CATEGORIES={DUMMY_CATEGORIES} />} />
          </>
        </AppWrapper>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
