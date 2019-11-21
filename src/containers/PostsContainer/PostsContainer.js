import React, {Component} from 'react';
import axios from 'axios';

import Posts from '../../components/Posts/Posts';
import './PostsContainer.css';

class PostsContainer extends Component {
  state = {
    posts: [],
  };

  componentDidMount () {
    // ${process.env.REACT_APP_API_URL}/posts/all
    axios.get(`https://jsonplaceholder.typicode.com/posts`) // placeholder for posts api
      .then(res => {
        console.log(res)
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render () {
    return (
      <div className="posts-container">
        <Posts posts={this.state.posts} />
      </div>
    )
  };
};

export default PostsContainer;