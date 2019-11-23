import React, {Component} from 'react';
import Article from '../Article/Article';
import axios from 'axios';

class CityView extends Component {
    state = {
        thisCity: {}
    }

    

    render() {
        // let thisCity = this.props.cityList.find(city => return city.name === this.props.selectedCity);
        // let thisCity = this.props.cityList.filter(obj => {return obj.name === this.props.selectedCity})[0]
        
        return (
            <div>
                {console.log(this.props.cityList.filter(obj => {return obj.name === this.props.selectedCity})[0])}
                <h1>khgjgfhfg</h1>
                <Article />
            </div>
        )
    }
}

export default CityView;