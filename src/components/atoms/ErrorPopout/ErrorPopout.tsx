import React from 'react'
import { ErrorPopoutStyled } from './ErrorPopout.styles'
import PropTypes from 'prop-types'

type ErrorProps = {
  error: string
}

const ErrorPopout = ({ error }: ErrorProps) => {
  return <ErrorPopoutStyled>{error}</ErrorPopoutStyled>
}

ErrorPopout.propTypes = {
  error: PropTypes.string.isRequired,
}

export default ErrorPopout
