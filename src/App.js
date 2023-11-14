import Header from './Header.js';
import {Hero} from './ReservationPage.js';
import { Foodmenu } from './menuPage.js';
import { About } from './AboutPage.js';
import Footer from './Footer.js';
import './App.css';





function App() {
  return (
    <main>
      <section className='header-app'><Header /></section>
      <section className='hero-app'>
        <section className='subhero-app'>
        <Hero />
        </section>
      </section>
      <section className='menu-app'>
        <Foodmenu />
      </section>
      <section className='about-app'>
        <About />
      </section>
      <section className='footer-app'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
