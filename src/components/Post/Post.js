import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Post.css';
import axios from 'axios';

class Post extends Component {
  state = {
    post: {},
  };

  // axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)

  
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/${this.props.match.params}`)
      .then((res)=> {
        console.log(res)
        this.setState({
          post: res.data
        });
      })
      .catch(err => console.log(err));
  };
    
  render() {

    return(
      <div>
        <div className="hero">
          <img src="https://www.usnews.com/dims4/USNEWS/3e2b4ba/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fbb%2Fc8%2F59c40cdd4cacbc74086e09589bff%2F1064-the-bay-lights-3-james-ewing.jpg" alt="hero"/>
        </div>
        <div className="post-info">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
          <h4>Author</h4>
        </div>
      </div>
    )
  };
};

export default withRouter(Post);