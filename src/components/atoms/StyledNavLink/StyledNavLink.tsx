import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

type NavLinkProps = {
  children: JSX.Element | JSX.Element[]
  path: string
  logout?: any
}

const StyledNavLink = ({ children, path, logout }: NavLinkProps) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => (isActive ? { color: '#2DF8BB' } : { color: '#243A5A' })}
      onClick={logout}
    >
      {children}
    </NavLink>
  )
}

StyledNavLink.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.element.isRequired,
  logout: PropTypes.func,
}

export default StyledNavLink
