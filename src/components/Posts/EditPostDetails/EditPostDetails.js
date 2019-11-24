import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase';
import Button from 'react-bootstrap/Button';

class EditPostDetails extends Component {

  state = {
    city: '',
    title: '',
    content: '',
    storageref: firebase.storage().ref(),
  }

  componentDidMount() {
    this.setState({
      city: this.props.post.city,
      title: this.props.post.title,
      content: this.props.post.content,
    })
  }

  handleChagne = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  saveChanges = (event) => {
    console.log("update post details")
    const postId = params.post.id;
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
        this.props.updateState(body);
      })
      .catch((err)=>console.log(err));
  }

  fileSelectedHandler = (photo) => {
    this.setState({
      selectedFile: photo[0]
    }, function() {
      console.log(phtot[0]);
      this.state.storageref.child(`/images/user-${localStorage.getItem('uid')}`).put(this.state.selectedFile, {contentType: 'image/jpeg'}).then(snap => {
        snap.ref.getDownloadUrl().then(url => {
          console.log(url);
          this.setState({
            phott: url,
          });
        })
      })
    })
  }

  render () {
    
  }
}