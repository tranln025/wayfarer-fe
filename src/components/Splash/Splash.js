import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';

import './Splash.css'

const Splash = (props) => {
  return(
    <div className="splash-container">
      <Carousel />
      <h1>Wayfarer is...</h1>
      <About />
    </div>
  )
};

export default Splash;