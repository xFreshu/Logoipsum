import React from 'react'
import PropTypes from 'prop-types'
import { HeaderStyled } from './Header.styles'

type HeaderProps = {
  headerName: string | number
  whiteHeader?: boolean
}

const Header = ({ headerName, whiteHeader }: HeaderProps) => {
  return <HeaderStyled whiteHeader={whiteHeader}>{headerName}</HeaderStyled>
}

export default Header

Header.propTypes = {
  headerName: PropTypes.string.isRequired,
}
