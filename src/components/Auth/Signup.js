import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from 'react-router';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    currentCity: '',
    password: '',
    password2: '',
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state,{
      withCredentials: true,
    })
    .then((res) => {
      console.log("res >>>", res)
      this.props.setCurrentUser(res.data.data);
      this.props.history.push(`/users/${res.data.data}`);
      this.props.handleSignupModalOpen();
    })
    .catch((error) => console.log(error)); 
  };

  render() {
    return (
      <Modal show={this.props.signupModalOpen} onHide={this.props.handleSignupModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">username</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Current City</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
            </div>
            <button className="btn btn-primary float-right" type="submit">Sign Up</button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
};

export default withRouter(Signup);