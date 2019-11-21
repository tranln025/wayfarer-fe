import React, {Component} from 'react';
import axios from 'axios';

import Profile from '../../components/Profile/Profile';

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
        <h1>Profile</h1>
        <Profile profile={this.state.profile} />
      </div>
    );
  };
};

export default ProfileContainer;