import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    show: false,
  };

  handleClose() {
    this.setState({ showL: false });
  };

  handleShow() {
    this.setState({ show: true });
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
  return (
    <>
      <button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}
};

export default withRouter(Login);