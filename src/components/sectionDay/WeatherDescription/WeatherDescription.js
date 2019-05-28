import React, {Component} from 'react';
import './WeatherDescription.scss';

const WeatherDescription = (props) => {
    return ( 
        <div className='container-weather-description'>
            <span>{props.description.toUpperCase()}</span>
        </div>
    );
};

WeatherDescription.defaultProps = {
    description: 'clouds'
};

export default WeatherDescription;