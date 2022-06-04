import React from 'react'
import PropTypes from 'prop-types'

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

const AppTemplate = ({ children }: AppProps) => {
  return (
    <>
      <nav>Desktop</nav>
      {children}
      <nav>Mobile</nav>
    </>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppTemplate
