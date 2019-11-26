import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AuthForm.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,
    this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.props.setCurrentUser(res.data.data);
      this.props.history.push(`/users/${res.data.data}`);
      this.props.handleLoginModalOpen();
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (
      <Modal show={this.props.loginModalOpen} onHide={this.props.handleLoginModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="username" name="username" value={this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password} />
            </div>
            <button className="btn btn-primary float-right" type="submit">Login</button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
};

export default withRouter(Login);