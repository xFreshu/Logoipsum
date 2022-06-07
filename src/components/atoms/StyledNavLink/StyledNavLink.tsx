import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

type NavLinkProps = {
  children: JSX.Element | JSX.Element[]
  path: string
}

const StyledNavLink = ({ children, path }: NavLinkProps) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => (isActive ? { color: '#2DF8BB' } : { color: '#243A5A' })}
    >
      {children}
    </NavLink>
  )
}

StyledNavLink.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.element.isRequired,
}

export default StyledNavLink
