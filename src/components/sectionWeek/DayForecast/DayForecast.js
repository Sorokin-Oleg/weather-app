import React, {Component} from 'react';
import './DayForecast.scss';

const DayForecast = (props) => {
    return ( 
        <div className='container-day-forecast'>
            <span>Mon 13</span>
            <img src="./assets/img/static/day.svg" alt="description"/>
            <div>
                <span className='day-temp'>18 C°</span>
                <span className='night-temp'>8 C°</span>
            </div>
            <span>Partially cloudy</span>
        </div>
    );
};

export default DayForecast;