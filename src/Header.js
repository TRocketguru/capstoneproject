
import React from 'react';
import Logo from './images/logo.e.png';
import Nav from './Nav.js'
import './App.css'

function Header() {
  return (
    <div className='header-container'>
      <header className='header'>
      <figure>
      <img src={Logo} alt='Restaurant-Logo' width='300px'/>
      </figure>
      <Nav />
    </header>
    </div>
  )
}

export default Header
