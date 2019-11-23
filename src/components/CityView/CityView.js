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
    };

    render() {
        return (
            <div>
                <h1>{this.props.selectedCity}</h1>
                <Article />
                <a onClick={this.handlePostFormOpen} className="add-post-btn btn"><i class="fas fa-plus-circle fa-2x"></i></a>
                <PostForm postFormOpen={this.state.postFormOpen} handlePostFormOpen={this.handlePostFormOpen} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default CityView;