import React, {Component} from 'react';
import axios from 'axios';

import UserInfo from '../../components/Profile/UserInfo/UserInfo'
import EditUserInfo from '../../components/Profile/EditUserInfo/EditUserInfo'
import PostsContainer from '../PostsContainer/PostsContainer';
import firebase from '../../firebase';


import './ProfileContainer.css'

class ProfileContainer extends Component {
  state = {
    profile: {},
    selectedFile: null,
    storageref: firebase.storage().ref(),
    edit: false, 
  };

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      withCredentials: true,
    })
      .then(res => {
        console.log('res.data>>>>>>>>>', res.data);
        this.setState({
          profile: res.data.data,
        });
      })
      .catch(err => console.log(err));
  };

  fileSelectedHanler = (photo) => {
    this.setState({
        selectedFile: photo[0]
    }, function() {
      console.log(photo[0]);
        this.state.storageref.child(`/images/user-${localStorage.getItem('uid')}`).put(this.state.selectedFile, {contentType: 'image/jpeg'}).then(snap => {
          snap.ref.getDownloadURL().then(url => {
              console.log(url);
              this.setState({profile: {
                photo: url,
              }});
          })
      })
    })
  }

  // toggleEditMode = () => {
  //   console.log("toggle edit");
  //   this.setState(prevState => ({
  //     edit: !prevState.edit,
  //   }))
  // }

  editMode = () => {
    console.log("edit mode");
    this.setState({edit: true})
  }

  updateState = (updatedProfile) => {
    this.setState({profile: updatedProfile});
    this.setState({edit: false});
  }

  

  render() {
    return (
      <div>
        <h1>Profile Container</h1>
        <div className="row">
          {this.state.edit ?  
          <EditUserInfo profile={this.state.profile} fileSelectedHanler={this.fileSelectedHanler} toggleEditMode={this.toggleEditMode} updateState={this.updateState} /> 
          : <UserInfo profile={this.state.profile} fileSelectedHanler={this.fileSelectedHanler} saveChanges={this.saveChanges} editMode={this.editMode}/>}
          {/* <UserInfo profile={this.state.profile} fileSelectedHanler={this.fileSelectedHanler} editMode={this.editMode}/> */}
          <PostsContainer />
        </div>
      </div>
    );
  };
};

export default ProfileContainer;