import React from 'react'
import { Card } from '../../atoms/Card/Card.styles'
import Logo from '../../../assets/Logo.svg'
import AuthLogin from '../AuthLogin/AuthLogin'

const AuthCard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt='Logo app' style={{ margin: '40px' }} />
      <Card auth>
        <h1>Sign in</h1>
        <AuthLogin />
      </Card>
    </>
  )
}

export default AuthCard
