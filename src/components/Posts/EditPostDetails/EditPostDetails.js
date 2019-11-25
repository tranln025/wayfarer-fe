import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class EditPostDetails extends Component {

  state = {
    title: '',
    content: '',
    photo: '',
    cities: [],
    city: "",
  };


  componentDidMount() {
    this.setState({
      city: this.props.post.city,
      title: this.props.post.title,
      content: this.props.post.content,
    })
  }

  handleCitySelect = (e) => {
    this.setState({
      city: e.target.value,
    })
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }



  saveChanges = (event) => {
    console.log("update post details", event)
    const postId = this.params.post.id;
    event.preventDefault();
    let body = {
      city: this.props.post.city,
      title: this.props.post.title,
      content: this.props.post.content,
    }
    axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}/update`, body, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        this.props.handleEditPostFormOpen();
      })
      .catch((err)=>console.log(err));
  }


  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/cities/all`)
      .then((res) => {
        const cities = res.data.data.map(city => {
          return {
            value: city._id, 
            display: city.name
          };
        });
        this.setState({
          cities: [{
            value: '',
            display: 'Select a city'
          }]
          .concat(cities)
        });
      })
      .catch((error) => console.log(error));
  }

  render () {
    return (
      <Modal show={this.props.postFormOpen} onHide={this.props.handleEditPostFormOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.saveChanges} >
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control form-control-lg" name="city" onChange={this.handleCitySelect} value={this.state.selectedCity}>
                {this.state.cities.map((city) => <option key={city.value} value={city.value}>{city.display}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="photo">Photo URL</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="photo" name="photo" value={this.state.photo} />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="title" name="title" value={this.state.title} />
            </div>
            <div className="form-group">
              <label htmlFor="content">How was your trip?</label>
              <textarea onChange={this.handleChange} className="form-control form-control-lg" type="text" id="content" name="content" value={this.state.content} />
            </div>
            <button className="btn btn-primary float-right" type="submit">Post</button>
          </form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default EditPostDetails;