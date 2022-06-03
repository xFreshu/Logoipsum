import React from 'react'
import { Card } from '../../../atoms/Card/Card.styles'
import Logo from '../../../../assets/Logo.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.h1`
  text-align: center;
  margin-top: 10px;
`

type AppProps = {
  children: JSX.Element | JSX.Element[]
  headerName: string
}

const AuthCard = ({ children, headerName }: AppProps) => {
  return (
    <>
      <img src={Logo} alt='Logo app' style={{ margin: '40px' }} />
      <Card auth>
        <Header>{headerName}</Header>
        {children}
      </Card>
    </>
  )
}

AuthCard.propTypes = {
  children: PropTypes.element.isRequired,
  headerName: PropTypes.string.isRequired,
}

export default AuthCard
