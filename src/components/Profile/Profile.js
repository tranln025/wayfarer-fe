import React, {Component} from 'react';


import './Profile.css';

const Profile = (props) => {

    return (
      <div className="user-details">
        <h1>User details</h1>
        <img src="https://picsum.photos/250" alt="profile photo" />
      </div>
    )
  }

export default Profile;