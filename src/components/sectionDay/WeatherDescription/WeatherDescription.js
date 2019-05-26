import React, {Component} from 'react';
import './WeatherDescription.scss';

const WeatherDescription = (props) => {
    const strDescription = '' + props.description;
    const render = strDescription.toUpperCase();
    return ( 
        <div className='container-weather-description'>
            <span>{render}</span>
        </div>
    );
};

WeatherDescription.defaultProps = {
    description: 'clouds'
};

export default WeatherDescription;