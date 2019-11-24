import React, {Component} from 'react';
import axios from 'axios';

import Posts from '../../components/Posts/Posts';
import './PostsContainer.css';

class PostsContainer extends Component {
  state = {
    posts: [],
  };

  componentDidMount () {
    axios.get(`${process.env.REACT_APP_API_URL}/posts/all`)
      .then(res => {
        console.log(res)
        let filteredPosts = res.data.data.filter((post) => {
          return post.author === this.props.currentUser
        })
        this.setState({
          posts: filteredPosts
        });
      })
      .catch(err => console.log(err));
  };



    // deletePost = (post) => {
    //   axios.get(`${process.env.REACT_APP_API_URL}/posts/${postId}`)
    //     .then((res) => {
    //     let post = this.state.posts.filter((post) => {
    //       return post._id !== res.data._id;
    //     });
    //     this.setState({post});
    //   });
    // };

  render () {
    return (
      <div className="posts-container">
        <Posts posts={this.state.posts}/>
      </div>
    );
  };
};

export default PostsContainer;