import React from 'react';
import Bruschetta from './images/bruschetta.jpg';
import GreekSalad from './images/greek salad.jpg';
import LemonDessert from './images/lemon dessert.jpg';
import Nav from './Nav';

export const Foodmenu = ()=>{
  return(
    <main className='special-week'>
      <section className='week-order'>
        <h2>This Week Specials!</h2>
        <button type='submit'>Online Menu</button>
      </section>
      <section className='week-card'>
        <article className='cards'>
          <img src={GreekSalad} alt='Greek salad' width='325px' height='222px' style={{borderRadius: "1rem"}} />
          <section className='cards-header'>
          <h3>Greek Salad</h3><span>$12.99</span>
          </section>

          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

         <section className='cards-order'>
          <h3>Order a delivery</h3>
          </section>
        </article>
        <article className='cards'>
          <img src={Bruschetta} alt='Bruschetta' width='325px' height='222px' style={{borderRadius: "1rem"}} />
          <section className='cards-header'>
          <h3>Bruschetta</h3><span>$5.99</span>
          </section>

          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <section className='cards-order'>
          <h3>Order a delivery</h3>
          </section>
        </article>
        <article className='cards'>
          <figure>
          <img src={LemonDessert} alt='Lemon dessert' width='325px' height='222px' style={{borderRadius: "1rem"}} />
          </figure>

          <section className='cards-header'>
          <h3>Lemon Dessert</h3><span>$5.00</span>
          </section>

          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <section className='cards-order'>
          <h3>Order a delivery</h3>
          </section>
        </article>
      </section>
    </main>
  )
}

function menuPage() {
  return (
    <>
        <div className='navBar-container'>
        <Nav />
        </div>
        <Foodmenu />
    </>
  )
}

export default menuPage
