import React from 'react';
import './assets/css/styles.css';
import Navbar from './js/Navbar';
import Hero from './js/Hero';
import Skills from './js/Skills';
import Footer from './js/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;