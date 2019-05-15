import React, {Component} from 'react';
import './WeatherMain.scss';

const WeatherMain = (props) => {
    return ( 
        <div className='container-weather-main'>
            <div>
                <span>Visibility</span>
                <span>4 km</span>
            </div>
            <div>
                <span>Wind</span>
                <span>2 m/s</span>
            </div>
            <div>
                <span>Hymidity</span>
                <span>75%</span>
            </div>
            <div>
                <span>Pressure</span>
                <span>710.00 mm</span>
            </div>
        </div>
    );
};

export default WeatherMain;