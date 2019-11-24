import React, {Component} from 'react';
import axios from 'axios';
import Article from '../Article/Article';
import PostForm from '../PostForm/PostForm';

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

    render() {
        // let thisCity = this.props.cityList.find(city => return city.name === this.props.selectedCity);
        // let thisCity = this.props.cityList.filter(obj => {return obj.name === this.props.selectedCity})[0]
        
        return (
            <div>
                <h1>{this.props.selectedCityObject && this.props.selectedCityObject.name}</h1>
                <Article />
                <a onClick={this.handlePostFormOpen} className="add-post-btn btn"><i class="fas fa-plus-circle fa-2x"></i></a>
                <PostForm postFormOpen={this.state.postFormOpen} handlePostFormOpen={this.handlePostFormOpen} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default CityView;