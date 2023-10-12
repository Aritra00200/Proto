import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src="./images/cinelogo.png" alt="logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <ul className="nav-link-items">
            <li>Home</li>
            <li>Services</li>
            <li>Book Tickets</li>
            <li>Shows</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
