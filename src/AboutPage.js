import React from 'react';
import Nav from './Nav';
import MarioAdrian from './images/Mario and Adrian A.jpg';
import RestaurantChef from './images/restaurantchefB.jpg';


export const About = ()=>{
  return(
    <main className='description'>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </article>
        <article>
          <figure className='description-img1'>
          <img src={MarioAdrian} alt="Restaurant Description" width='350px' height='300px' style={{borderRadius: '2rem'}}/>
          </figure>
          <figure className='description-img2'>
          <img src={RestaurantChef} alt="Restaurant Description" width='350px' height='300px' style={{borderRadius: '2rem'}}/>
          </figure>
        </article>
      </main>
  )
}
function AboutPage() {
  return (
    <>
    <div className='navBar-container'>
      <Nav />
    </div>
    <About />
    </>
  )
}

export default AboutPage
