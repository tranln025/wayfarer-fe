import React from 'react';
import Login from '../Auth/Login.js';
import Signup from '../Auth/Signup.js';

const Splash = () => (
  <div className="container">
    <h1>Wayfarer</h1>
    <Signup />
    <Login />
  </div>
);

export default  Splash;