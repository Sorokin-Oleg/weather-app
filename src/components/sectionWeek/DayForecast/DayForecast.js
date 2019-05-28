import React, {Component} from 'react';
import { MOUNTHS } from './../../../const/mounths';
import { WEEK } from './../../../const/week';
import { checkZero } from './../../../function/checkZero';

import './DayForecast.scss';

const DayForecast = (props) => {
    const currentIcon = () => {
        switch (props.icon) {
            case '01d':
                return <img src="./assets/img/animated/day.svg" alt="Clear sky"/>;
            case '01n':
                return <img src="./assets/img/animated/night.svg" alt="Clear sky"/>;
            case '02d':
            case '02n':                
            case '03d':
            case '03n':
                return <img src="./assets/img/animated/cloudy-sun.svg" alt="Few clouds: 40%"/>;
            case '04d':
            case '04n':
                return <img src="./assets/img/animated/cloudy.svg" alt="Overcast clouds: 85-100%"/>;
            case '09d':
            case '09n':
            case '10d':
            case '10n':
                return <img src="./assets/img/animated/rainy.svg" alt="Rain"/>;
            case '11d':
            case '11n':              
                return <img src="./assets/img/animated/thunder.svg" alt="Thunderstorm"/>;
            case '13d':
            case '13n':
                return <img src="./assets/img/animated/snowy.svg" alt="Snow"/>;
            case '50d':
            case '50n': 
                return <img src="./assets/img/animated/cloudy.svg" alt="Mist"/>;
                
            default:
                return <span>IMAGE NOT FOUND</span>
        };
    };
    const units = props.tempUnits ? '°C': '°F';
    const description = props.description[0].toUpperCase() + props.description.slice(1);
    const date = new Date((props.date + props.timezone) * 1000);
    const day = props.lang ? WEEK.en[date.getUTCDay()] + ', ' + checkZero(date.getUTCDate() + ' ' + MOUNTHS.en[date.getUTCMonth()]):
                             WEEK.ru[date.getUTCDay()] + ', ' + checkZero(date.getUTCDate() + ' ' + MOUNTHS.ru[date.getUTCMonth()]);
                                     
    return ( 
        <div className='container-day-forecast'>
            <span>{day}</span>
            {currentIcon()}
            <div>
                <span className='day-temp'>{Math.round(props.temp) + ' ' + units}</span>
            </div>
            <span>{description}</span>
        </div>
    );
};

export default DayForecast;