//External Imports
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

//Internal Imports
import Routes from './config/Routes';
import Navbar from './Navbar/Navbar';

import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <h1>Ali Sux</h1>
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </div>
    );
  }

}

export default withRouter(App);