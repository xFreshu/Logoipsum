import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = React.createContext({
  authUser: { login: '', password: '', email: '' },
  handleAuthUser: (data) => {},
})

const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({})
  const handleAuthUser = (data) => {
    setAuthUser(data)
    console.log('LOG')
    console.log('USER:')
    console.log(data)
  }
  return (
    <UserContext.Provider value={{ authUser, handleAuthUser }}>{children}</UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default UserProvider
