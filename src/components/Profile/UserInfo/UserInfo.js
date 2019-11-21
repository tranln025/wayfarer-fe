import React, {Component} from 'react';


import './UserInfo.css';

const UserInfo = (props) => {

    return (
      <div className="user-details">
        <h1>User details</h1>
        <div className="avatar-container">
          <img id="avatar" src={props.profile.photo}></img>
        </div>
        <h3>{props.profile.username}</h3>
        <p>email: {props.profile.email}</p>
        <p>Current city: {props.profile.currentCity}</p>
        <button name="edit-ptofile" onClick={props.editMode}>Edit</button>
      </div>
    )
  }

export default UserInfo;