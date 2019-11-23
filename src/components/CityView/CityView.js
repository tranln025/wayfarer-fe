import React, {Component} from 'react';
import Article from '../Article/Article';
import axios from 'axios';

class CityView extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.selectedCity}</h1>
                <Article />
            </div>
        )
    }
}

export default CityView;