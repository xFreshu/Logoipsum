import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { MdAddCircle } from 'react-icons/md'
import { IoSettingsSharp, IoLogOut } from 'react-icons/io5'
import styled from 'styled-components'
import StyledNavLink from '../../atoms/StyledNavLink/StyledNavLink'

const MobileNavigationStyled = styled.nav`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  ul {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 3rem;
    padding: 5px;
    border-radius: 10px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      text-decoration: none;
    }
  }
  @media (min-width: 880px) {
    display: none;
  }
`

const MobileNavigation = () => {
  return (
    <MobileNavigationStyled>
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
          <StyledNavLink path='/'>
            <IoLogOut />
          </StyledNavLink>
        </li>
      </ul>
    </MobileNavigationStyled>
  )
}

export default MobileNavigation
