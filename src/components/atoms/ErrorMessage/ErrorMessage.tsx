import React from 'react'
import PropTypes from 'prop-types'
import { ErrorFormMessage } from './ErrorMessage.styles'
type errorMsgProps = {
  errorMsg: string
}

const ErrorMessage = ({ errorMsg }: errorMsgProps) => {
  return <ErrorFormMessage>{errorMsg}</ErrorFormMessage>
}

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string.isRequired,
}

export default ErrorMessage
