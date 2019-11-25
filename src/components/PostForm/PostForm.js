import React, {Component} from 'react';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostForm extends Component {
  state = {
    title: '',
    content: '',
    photo: '',
    cities: [],
    city: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCitySelect = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/posts/new`,
    this.state, {
      withCredentials: true,
    })
    .then((res) => {
      console.log('toogle plz',res)
      this.props.handlePostFormOpen();
    })
    .catch((error) => console.log(error));
  }

//   handlePostFormOpen = () => {
//     this.setState((prevState) => {
//         return {
//             postFormOpen: !prevState.postFormOpen
//         }
//     });
//     this.fetchPost();
//     this.props.refreshPage();
// };

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
      <Modal show={this.props.postFormOpen} onHide={this.props.handlePostFormOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit} >
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
};

export default PostForm;