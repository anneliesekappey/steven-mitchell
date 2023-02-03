import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, HomeIcon } from './Shared.js'
import homeIcon from '../images/home.png'

export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <HomeIcon>
          <img src={homeIcon} alt="Home Icon" height="45px" />
        </HomeIcon>
      </Link>
      <h2> Join the Club!</h2>
      <h2> Create Your Dating Profile </h2>
    </Nav>
  )
}
