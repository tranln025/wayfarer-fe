import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Post.css';
import DeleteConfirmation from './DeleteConfirmation/DeleteConfirmation';
import axios from 'axios';

class Post extends Component {
  state = {
    post: {},
    author: {},
    deleteModalOpen: false,
  };
  
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/findById/${this.props.match.params.postId}`)
      .then((res)=> {
        console.log(res)
        this.setState({
          post: res.data.data,
          author: res.data.data.author
        });
      })
      .catch(err => console.log(err));
  };

  handleDeleteModalOpen = () => {
    this.setState((prevState) => {
      return {
        deleteModalOpen: !prevState.deleteModalOpen
      };
    });
  };
  
  render() {
    return(
      <div>
        <div className="hero">
          <img src={this.state.post.photo} alt="hero"/>
        </div>
        <div className="post-info">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.content}</p>
          <h4>{this.state.author.username}</h4>
          <div>
            <button className='remove' onClick={this.handleDeleteModalOpen}>Delete</button>
          </div>
        </div>
        <DeleteConfirmation deleteModalOpen={this.state.deleteModalOpen} handleDeleteModalOpen={this.handleDeleteModalOpen} postTitle={this.state.post.title} />
      </div>
    )
  };
};

export default withRouter(Post);