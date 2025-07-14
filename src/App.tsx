import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <Contact />
      {/* Other sections will be added here */}
    </div>
  );
};

export default App;
