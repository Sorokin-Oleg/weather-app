import React, {Component} from 'react';
import './WeatherIcon.scss';

const WeatherIcon = (props) => {

    const currentIcon = () => {
        switch (props.icon) {
            case '01d':
                return <img src="./assets/img/animated/day.svg" alt="Clear sky"/>;
            case '01n':
                return <img src="./assets/img/animated/night.svg" alt="Clear sky"/>;
            case '02d':
            case '02n':
                return <img src="./assets/img/animated/cloudy-sun.svg" alt="Few clouds: 11-25%"/>;
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return <img src="./assets/img/animated/cloudy.svg" alt="Overcast clouds: 85-100%"/>;
            case '09d':
            case '10d':
                return <img src="./assets/img/animated/rainy.svg" alt="Rain"/>;
            case '11d':             
                return <img src="./assets/img/animated/thunder.svg" alt="Thunderstorm"/>;
            case '13d':
                return <img src="./assets/img/animated/snowy.svg" alt="Snow"/>;
            case '50d': 
                return <img src="./assets/img/animated/mist.svg" alt="Mist"/>;
                
            default:
                return <span>IMAGE NOT FOUND</span>
        };
    };
    
    return ( 
        <div className='container-weather-icon'>
            <div className='content-icon'>
                {currentIcon()}
            </div>          
        </div>
    );
};

export default WeatherIcon;