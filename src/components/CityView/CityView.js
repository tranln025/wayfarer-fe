import React, {Component} from 'react';
import PostForm from '../PostForm/PostForm';

import './CityView.css';

class CityView extends Component {
    state = {
        postFormOpen: false,
    }

    handlePostFormOpen = () => {
        this.setState((prevState) => {
            return {
                postFormOpen: !prevState.postFormOpen
            }
        });
        this.props.refreshPage();
    };

    addPostButton = () => {
        return(
            <i onClick={this.handlePostFormOpen} className="add-post-btn fas fa-plus-circle fa-3x"></i>
        );
    };

    render() {
        return (
            <>
                <div className="city-page row">
                    <div className="city-info col-5">
                        <h2>{this.props.selectedCityObject && this.props.selectedCityObject.name}</h2>
                        <h5>{this.props.selectedCityObject && this.props.selectedCityObject.country}</h5>
                    </div>
                    <div className="city-img-container col-7">
                    <img className="city-img" src={this.props.selectedCityObject && this.props.selectedCityObject.photo} alt={this.props.selectedCityObject && this.props.selectedCityObject.name}/>
                    {localStorage.getItem('uid') && this.addPostButton()}

                    </div>
                    
                    <PostForm postFormOpen={this.state.postFormOpen} handlePostFormOpen={this.handlePostFormOpen} currentUser={this.props.currentUser} />
                </div>
            </>
        );
    };
};

export default CityView;