import React, {Component} from 'react';
import Article from '../Article/Article';
import axios from 'axios';

class CityView extends Component {   
    render() {
        // let thisCity = this.props.cityList.find(city => return city.name === this.props.selectedCity);
        // let thisCity = this.props.cityList.filter(obj => {return obj.name === this.props.selectedCity})[0]
        
        return (
            <div>
                <h1>{this.props.selectedCityObject && this.props.selectedCityObject.name}</h1>
                <Article />
            </div>
        )
    }
}

export default CityView;