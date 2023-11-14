
import React from 'react';
import Nav from './Nav.js';
import './index.css';
import Logo from './images/logo.e.png';

function Header() {
  return (
    <>
    <header>
      <figure>
      <img src={Logo} alt='Restaurant-Logo' width='300px'/>
      </figure>
      <Nav />
    </header>
    </>
  )
}

export default Header
