import React from 'react';
import Login from '../Auth/Login.js';
import Signup from '../Auth/Signup.js';

const Splash = (props) => {
  console.log(props)
  return(
    <div className="container">
    <h1>Wayfarer</h1>
    <Signup />
    <Login currentUser={props.currentUser} setCurrentUser={props.setCurrentUser}/>
  </div>
  )
};

export default  Splash;