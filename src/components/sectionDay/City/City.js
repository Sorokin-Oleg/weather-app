import React, {Component} from 'react';
import './City.scss';

const City = (props) => {
    return ( 
        <div className='container-city'>
            <span>{props.currentCity.toUpperCase()}</span>
        </div>
    );
};

City.defaultProps = {
    currentCity: 'City'
};

export default City;