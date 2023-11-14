import React from 'react';
import Logo from './images/logo-white.png';
import {Link} from 'react-router-dom';



function Footer() {
  return (
      <Footer>
        <section>
        <figure>
        <img src={Logo} alt='Footer Logo' width='90px' height='90px' />
        </figure>
        <section className='site-map'>
        <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservation'>Reservation</Link> </li>
          <li><Link to='/order'>Order Online</Link></li>
          <li><Link to='/login'>Sign up/Login</Link></li>
        </ul>
        </nav>
        </section>

        <section className='contact-us'>
        <h3>Contact Us</h3>
        <p><i>678 Pisa Ave, Chicago, IL 60611</i></p>
        <p><i>(312) 593-2744</i></p>
        <p><i>customer@littlelemon.com</i></p>
        </section>

        <section className='connect-with-us'>
        <h4>Connect with us</h4>
        </section>
        </section>
      </Footer>
  )
}

export default Footer;