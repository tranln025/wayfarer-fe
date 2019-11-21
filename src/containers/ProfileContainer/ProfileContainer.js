import React, {Component} from 'react';
import axios from 'axios';

import Profile from '../../components/Profile/Profile';
import PostsContainer from '../PostsContainer/PostsContainer';

class ProfileContainer extends Component {
  state = {
    profile: {},
  };

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      withCredentials: true,
    })
      .then(res => {
        console.log(res);
        this.setState({
          profile: res.data.data,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Profile Container</h1>
        <div className="row">
          <Profile profile={this.state.profile} />
          <PostsContainer />
        </div>
      </div>
    );
  };
};

export default ProfileContainer;