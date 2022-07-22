import React from 'react'
import PropTypes from 'prop-types'
import { HeaderStyled } from './Header.styles'

type HeaderProps = {
  headerName: string | number
}

const Header = ({ headerName }: HeaderProps) => {
  return <HeaderStyled>{headerName}</HeaderStyled>
}

export default Header

Header.propTypes = {
  headerName: PropTypes.string.isRequired,
}
