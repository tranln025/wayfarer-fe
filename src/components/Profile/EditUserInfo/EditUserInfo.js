import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase';


import './EditUserInfo.css';

class EditUserInfo extends Component {

    state = {
        profile: this.props.profile,
        storageref: firebase.storage().ref(),
    }
    
    handleChange = (event) => {
        this.setState({ profile: {
            [event.target.name]: event.target.value,}
        })
    };

    saveChanges = (event) => {
        console.log("updating user info")
        const userId = localStorage.getItem('uid');
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}/update`, this.state.profile, {
            withCredentials: true,
        })
            .then((res)=>{
                console.log(res);
                this.props.updateState(this.state.profile);
            })
            .catch((err)=>console.log(err));
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

    render () {

        return (
        <div className="user-details">
            <h1>User details</h1>
            <form onSubmit={this.props.saveChanges}>
                <div className="avatar-container">
                <img id="avatar" src={this.props.profile.photo} alt="avatar"></img>
                </div>
                <input type="file" onChange={ (e) => this.fileSelectedHanler(e.target.files) } />
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="text" name="username" value={this.state.profile.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="email" name="email" value={this.state.profile.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="currentCity">Email</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="email" name="currentCity" value={this.state.profile.currentCity} />
                </div>
                
                <button name="save-ptofile" onClick={this.saveChanges}>Save</button>
            </form>

        </div>
        )
    }
}

export default EditUserInfo;