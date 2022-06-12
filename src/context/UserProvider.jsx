import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = React.createContext({
  authUser: { login: '', password: '', email: '' },
  setAuthUser: data => {},
})

const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({})
  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>{children}</UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default UserProvider
