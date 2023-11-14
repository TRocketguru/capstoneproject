import React from 'react';
import RestaurantFood from './images/restauranfood.jpg';
import Nav from './Nav.js';
import './App.css';


export const Hero = ()=>{
  return(
    <main className='hero-container'>
    <article className='hero'>
    <section className="hero-section">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>

      <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

      <button type='click'>Reserve a table</button>
    </section>
    <figure className='hero-image'>
      <img src={RestaurantFood} alt="Restaurant Food" width="465px" height="384px" style={{borderRadius: "2rem"}}/>
    </figure>
    </article>
  </main>
  )
}

function ReservationPage() {
  return (
      <>
      <section className='navBar-container'>
      <Nav />
      </section>
      <section >
      <Hero />
      </section>
    </>
  )
}

export default ReservationPage;
