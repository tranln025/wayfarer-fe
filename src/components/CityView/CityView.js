import React, {Component} from 'react';
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
        return (
            <div>
                <h1>{this.props.selectedCity}</h1>
                <a onClick={this.handlePostFormOpen} className="add-post-btn btn"><i class="fas fa-plus-circle fa-2x"></i></a>
                <PostForm postFormOpen={this.state.postFormOpen} handlePostFormOpen={this.handlePostFormOpen} currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default CityView;