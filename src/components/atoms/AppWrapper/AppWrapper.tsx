import React from 'react'
import { Wrapper } from './AppWrapper.styles'
import { Routes } from 'react-router-dom'
import PropTypes from 'prop-types'

type AppProps = {
  children: JSX.Element | JSX.Element[]
}

const AppWrapper = ({ children }: AppProps) => {
  return (
    <Wrapper>
      <Routes>{children}</Routes>
    </Wrapper>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.element.isRequired,
}
export default AppWrapper
