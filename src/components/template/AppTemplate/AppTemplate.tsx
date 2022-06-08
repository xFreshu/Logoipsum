import React from 'react'
import PropTypes from 'prop-types'
import MobileNavigation from '../../organisms/MobileNavigation/MobileNavigation'
import Logo from '../../../assets/Logo.svg'

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

const AppTemplate = ({ children }: AppProps) => {
  return (
    <>
      <img src={Logo} alt='Logo app' style={{ margin: '40px' }} />
      {/* <nav>Desktop</nav> */}
      {children}
      <MobileNavigation />
    </>
  )
}

AppTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppTemplate
