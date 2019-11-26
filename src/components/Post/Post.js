import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Post.css';
import DeleteConfirmation from './DeleteConfirmation/DeleteConfirmation';
import EditPostDetails from '../Posts/EditPostDetails/EditPostDetails';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';
var moment = require('moment');

class Post extends Component {
  state = {
    post: {},
    author: {},
    deleteModalOpen: false,
  };
  
  componentDidMount() {
    this.fetchNewPost();
  };

  fetchNewPost = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/findById/${this.props.match.params.postId}`)
    .then((res)=> {
      this.setState({
        post: res.data.data,
        author: res.data.data.author
      });
    })
    .catch(err => console.log(err));
  };

  handleEditPostFormOpen = () => {
    this.setState((prevState) => {
        return {
            postFormOpen: !prevState.postFormOpen
        }
    });
    this.fetchNewPost();
};

  handleDeleteModalOpen = () => {
    this.setState((prevState) => {
      return {
        deleteModalOpen: !prevState.deleteModalOpen
      };
    });
  };

  addEditButtons = () => {
    return (
      <>
        <div className="edit-buttons-container">
          <div>
            <Button className='remove' onClick={this.handleDeleteModalOpen} variant="outline-primary">Delete</Button>
            <DeleteConfirmation deleteModalOpen={this.state.deleteModalOpen} handleDeleteModalOpen={this.handleDeleteModalOpen} postTitle={this.state.post.title} />
          </div>
          <div>
            <Button className='edit' onClick={this.handleEditPostFormOpen} variant="outline-primary">Edit</Button>
            <EditPostDetails postFormOpen={this.state.postFormOpen} handleEditPostFormOpen={this.handleEditPostFormOpen} currentUser={this.props.currentUser} post={this.state.post}/>
          </div>
        </div>
      </>
    );
  };
  
  render() {
    return(
      <>
        <div className="wrapper">
          <div className="hero">
            <img src={this.state.post.photo} alt="hero"/>
          </div>
          <div className="author-info-container">
            <div className="author-photo-container">
              <img id="user-photo" src={this.state.author.photo} alt={"user profile"} />
            </div>
            <Link style={{ textDecoration: 'none' }} to={'/users/' + this.state.author._id}>
              <p>by {this.state.author.username}</p>
            </ Link>
          </div>
          <div className="post-info">
            <h2>{this.state.post.title}</h2>
            <p>{moment(this.state.post.postDate).fromNow()}</p>
            <p>{this.state.post.content}</p>
            {this.state.author._id === localStorage.getItem('uid') && this.addEditButtons()}
            <CommentsContainer postId={this.props.match.params.postId} />
          </div>
        </div>
      </>
    );
  };
};

export default withRouter(Post);