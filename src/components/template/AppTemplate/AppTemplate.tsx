import React from 'react'
import PropTypes from 'prop-types'
import MobileNavigation from '../../organisms/MobileNavigation/MobileNavigation'

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

const AppTemplate = ({ children }: AppProps) => {
  return (
    <>
      <nav>Desktop</nav>
      {children}
      <MobileNavigation />
    </>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppTemplate
