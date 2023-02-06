import React from 'react'
import { Nav, HomeIcon } from './Shared.js'
import homeIcon from '../images/home.png'

export const NavBar = () => {
  return (
    <Nav>
      <HomeIcon>
        <img src={homeIcon} alt="Home Icon" height="45px" />
      </HomeIcon>
    </Nav>
  )
}
