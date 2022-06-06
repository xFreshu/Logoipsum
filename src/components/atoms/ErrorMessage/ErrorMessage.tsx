import React from 'react'
import PropTypes from 'prop-types'
import { ErrorFormMessage } from './ErrorMessage.styles'
type errorMsgProps = {
  errorMsg: string
}

const ErrorMessage = ({ errorMsg }: errorMsgProps) => {
  if (errorMsg.length !== 0) {
    return <ErrorFormMessage>{errorMsg}</ErrorFormMessage>
  } else {
    return <ErrorFormMessage>Błąd</ErrorFormMessage>
  }
}

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string.isRequired,
}

export default ErrorMessage
