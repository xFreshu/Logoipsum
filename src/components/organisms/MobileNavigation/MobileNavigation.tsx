import React, { useContext } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import { IoSettingsSharp, IoLogOut } from 'react-icons/io5'
import { MobileNavigationStyles } from './MobileNavigation.styles'
import StyledNavLink from '../../atoms/StyledNavLink/StyledNavLink'
import { UserContext } from '../../../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const MobileNavigation = () => {
  // @ts-ignore
  const { authUser, setAuthUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('LOGOUT')
    setAuthUser({})
    console.log(authUser)
    navigate('/')
  }
  return (
    <MobileNavigationStyles>
      <ul>
        <li>
          <StyledNavLink path='/home'>
            <AiFillHome />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink path='/profile'>
            <FaUser />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink path='/add'>
            <MdAddCircle />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink path='/settings'>
            <IoSettingsSharp />
          </StyledNavLink>
        </li>
        <li>
          <div onClick={handleLogout} style={{ color: '#243A5A', cursor: 'pointer' }}>
            <IoLogOut />
          </div>
        </li>
      </ul>
    </MobileNavigationStyles>
  )
}

export default MobileNavigation
