import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
    console.log(this.state);
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`,
    this.state, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
  }

  render() {
    console.log(this.props);
    return (
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h4 className="mb-3">Login</h4>
          <form onSubmit={this.handleSubmit}>
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
        </div>
      </div>
    </div>
    )
  }
};

export default withRouter(Login);