import React from 'react'
import { AuthCardStyled, Header } from './AuthCard.styles'
import Logo from '../../../assets/Logo.svg'
import PropTypes from 'prop-types'

type AppProps = {
  children: JSX.Element | JSX.Element[]
  headerName: string
}

const AuthCard = ({ children, headerName }: AppProps) => {
  return (
    <>
      <img src={Logo} alt='Logo app' style={{ margin: '40px' }} />
      <AuthCardStyled auth>
        <Header>{headerName}</Header>
        {children}
      </AuthCardStyled>
    </>
  )
}

AuthCard.propTypes = {
  children: PropTypes.element.isRequired,
  headerName: PropTypes.string.isRequired,
}

export default AuthCard
