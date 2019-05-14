import React, {Component} from 'react';
import './WeatherIcon.scss';

const WeatherIcon = (props) => {
    return ( 
        <div className='container-weather-icon'>
            <div className='content-icon'>
                <img src="./assets/img/animated/day.svg" alt="description"/>
            </div>          
        </div>
    );
};

export default WeatherIcon;