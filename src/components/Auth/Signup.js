import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AuthForm.css';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    currentCity: '',
    password: '',
    password2: '',
    usernameValid: true,
    emailValid: true,
    passwordValid: true,
    password2Valid: true,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateForm = (e) => {
    e.preventDefault();
    if (this.state.password.length < 8) {
      this.setState({
        passwordValid: false,
      })
    } else {
      this.setState({
        passwordValid: true,
      });
      if (this.state.password !== this.state.password2) {
        this.setState({
          password2Valid: false,
        })
      } else {
        this.setState({
          password2Valid: true,
        }, this.handleSubmit);
      };  
    };
  }

  handleSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.status === 400 || res.data.status === 500) {
        this.setState({
          usernameValid: false,
          emailValid: false,
        })
      } else {
        this.props.setCurrentUser(res.data.data);
        this.props.history.push(`/users/${res.data.data}`);
        this.props.handleSignupModalOpen();
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Modal show={this.props.signupModalOpen} onHide={this.props.handleSignupModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.validateForm}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
              {this.state.usernameValid ? null : <small className="error-msg">Please choose another username or email</small> }
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
              {this.state.emailValid ? null : <small className="error-msg">Please choose another username or email</small> }
            </div>
            <div className="form-group">
              <label htmlFor="currentCity">Current City</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="currentCity" name="currentCity" value={this.state.currentCity} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
              {this.state.passwordValid ? null : <small className="error-msg">Password must be at least 8 characters</small>}
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2} />
              { this.state.password2Valid ? null : <small className="error-msg">Passwords do not match</small>}
            </div>
            <button className="btn btn-primary float-right" type="submit">Sign Up</button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
};

export default withRouter(Signup);