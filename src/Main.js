
import React from 'react';
import RestaurantFood from './restauranfood.jpg';
import './App.css';

function Main() {
  return (
    <div className='main-container'>
    <main className="main">
      <section className="hero-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>

        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

        <a href="#">Reserve a table</a>
      </section>
      <figure>
        <img src={RestaurantFood} alt="Restaurant Food Pictures" width="465px" height="384px" style={{borderRadius: "2rem"}}/>
      </figure>
      <section className='special-package'>
        
      </section>
    </main>
    </div>
  )
}

export default Main
