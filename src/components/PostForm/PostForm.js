import React, {Component} from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

//handlemodalopen from citycontainer


class PostForm extends Component {
  state = {
    city: '',
    title: '',
    content: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render () {
    return (
      <Modal show={this.props.loginModalOpen} onHide={this.props.handleLoginModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <select name="city">
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Gibraltar">Gibraltar</option>
              </select>
              <label htmlFor="city">City</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="city" name="city" value={this.state.city} />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value={this.state.title} />
            </div>
            <div className="form-group">
              <label htmlFor="content">How was your trip?</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="content" name="content" value={this.state.content} />
            </div>
            <button className="btn btn-primary float-right" type="submit">Post</button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
};

export default PostForm;