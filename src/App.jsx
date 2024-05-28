import React from 'react';
import './index.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection';
import Work from './pages/Work';
import Grids from './pages/Grids';
import Contact from './components/Contact';

function App() {


  return (
    <div className='App'>  
      <Header />
      <HeroSection/>
      <Work/>
      <Grids/>
      <Contact/>
    </div>
  )
}

export default App
