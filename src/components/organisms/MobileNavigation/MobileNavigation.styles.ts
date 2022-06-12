import styled from 'styled-components'

export const MobileNavigationStyles = styled.nav`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  width: 80%;
  max-width: 400px;
  background-color: #fff;
  ul {
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
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
