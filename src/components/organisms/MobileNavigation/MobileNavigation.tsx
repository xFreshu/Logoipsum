import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import styled from 'styled-components'

const MobileNavigationStyled = styled.nav`
  @media (min-width: 880px) {
    display: none;
  }
`

const MobileNavigation = () => {
  return (
    <MobileNavigationStyled>
      <ul>
        <li>
          <AiFillHome />
        </li>
        <li>
          <AiFillHome />
        </li>
      </ul>
    </MobileNavigationStyled>
  )
}

export default MobileNavigation
