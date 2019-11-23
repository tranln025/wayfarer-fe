import React from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import './CityList.css';

const CityList = (props) => {


        return (
            <div className="citiesList-container"> 
                <div className="citiesList">
                    <h3>Cities</h3>
                    <ListGroup>
                        {props.cityList && props.cityList.map((city, index)=> {
                            return (
                                <Link  style={{ textDecoration: 'none' }} to={"/cities/" + city.name.toLowerCase().split(' ').join('-')}>
                                    <ListGroup.Item className="list-item" variant="secondary" action href={"/cities/" + city.name.toLowerCase().split(' ').join('-')} name={city.name} onClick={props.handleSelect}>
                                        <div className="city-container">
                                            <div className="city-photo-container">
                                                <img src={city.photo} />
                                            </div>
                                            <p>{city.name}</p>
                                        </div>
                                    </ListGroup.Item>
                                </Link>
                                
                 
                            ) 
                        })}
                    </ListGroup>
                </div>
            </div>
        )
    
}

export default CityList;