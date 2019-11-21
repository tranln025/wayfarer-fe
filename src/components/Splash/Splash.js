import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';


const Splash = (props) => {
  console.log(props)
  return(
    <div className='container'>
      <div className="container row">
        <Carousel />
        <h1>Wayfarer is...</h1>
        <About />
      </div>
    </div>
  )
};

export default Splash;