import React from 'react';
import { Link } from 'react-router-dom';

import ListGroup from 'react-bootstrap/ListGroup';
import './CityList.css';

const CityList = (props) => {


        return (
            <>
                <div className="citiesList">
                    <ListGroup>
                        {props.cityList && props.cityList.map((city, index)=> {
                            return (
                                <Link to={"/cities/" + city.name.toLowerCase().split(' ').join('-')}>
                                    <ListGroup.Item variant="secondary" action href={"/cities/" + city.name.toLowerCase().split(' ').join('-')} name={city.name} onClick={props.handleSelect}>
                                        {city.name}
                                    </ListGroup.Item>
                                </Link>
                                
                 
                            ) 
                        })}
                    </ListGroup>
                </div>
            </>
        )
    
}

export default CityList;