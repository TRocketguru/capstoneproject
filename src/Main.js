
import React from 'react';
import Customer1 from './images/customer1.jpg';
import Customer2 from './images/customer2.jpg';
import Customer3 from './images/customer3.jpg';
import Customer4 from './images/customer4.jpg';;
import './App.css';

function Main() {
  return (
    <main className='main-container'>
      <div className='testimonial-container'>
      <section className='testimonial'>
        <h2>What people say about us!!</h2>
        <article className='test-cards'>
          <figure>
            <img src={Customer1} alt="testimonial" width='80px' height='80px' style={{borderRadius: '2rem'}} />
            <figcaption>
              <h4>Maria Sanchez</h4>
            </figcaption>
          </figure>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </article>
        <article className='test-cards'>
          <figure>
            <img src={Customer2} alt='testimonal' width='80px' height='80px' style={{borderRadius: '2rem'}} />
            <figcaption>
              <h4>Antony Clifton</h4>
            </figcaption>
          </figure>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </article>
        <article className='test-cards'>
          <figure>
            <img src={Customer3} alt='testimonial' width='80px' height='80px' style={{borderRadius: '2rem'}} />
            <figcaption>
              <h4>Tamika Jackson</h4>
            </figcaption>
          </figure>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </article>
        <article className='test-cards'>
          <figure>
            <img src={Customer4} alt="testimonial" width='80px' height='80px' style={{borderRadius: '2rem'}} />
            <figcaption>
              <h4>Brandon Ming</h4>
            </figcaption>
          </figure>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </article>
      </section>
      </div>
    </main>
  )
}

export default Main
