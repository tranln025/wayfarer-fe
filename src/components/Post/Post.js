import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Post.css';
import axios from 'axios';

class Post extends Component {
  state = {
    post: {},
    author: {},
  };

  // axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)

  
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
    
  render() {
    console.log(this.props.match.params.postId)
    return(
      <div>
        <div className="hero">
          <img src={this.state.post.photo} alt="hero"/>
        </div>
        <div className="post-info">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.content}</p>
          <h4>{this.state.author.username}</h4>
        </div>
      </div>
    )
  };
};

export default withRouter(Post);