import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';


function Nav(){
  return(
    <>
    <nav className='navBar-container'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
        <li><Link to='/reservation'>Reservation</Link> </li>
        <li><Link to='/order'>Order Online</Link></li>
        <li><Link to='/login'>Sign up/Login</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Nav
