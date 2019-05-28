import React, {Component} from 'react';
import './WeatherMain.scss';

const WeatherMain = (props) => {
    const description = {
        clouds: props.lang ? 'Clouds': 'Облачность',
        wind: props.lang ? 'Wind' : 'Ветер',
        humidity: props.lang ? 'Humidity' : 'Влажность',
        pressure: props.lang ? 'Pressure' : 'Давление'
    };

    /**
     * First condition (measurement system): true - metric, false - imperial.
     * Second condition language: true -en, false - ru.
     */
    const windUnits = props.tempUnits ? props.lang ? 'm/s' : 'м/с': props.lang ? 'mps' : 'миль/ч';

    return ( 
        <div className='container-weather-main'>
            <div>
                <span>{description.clouds}</span>
                <span>{Math.round(props.clouds)} %</span>
            </div>
            <div>
                <span>{description.wind}</span>
                <span>{Math.round(props.wind)} {windUnits}</span>
            </div>
            <div>
                <span>{description.humidity}</span>
                <span>{Math.round(props.humidity)} %</span>
            </div>
            <div>
                <span>{description.pressure}</span>
                <span>{Math.round(props.pressure)} {props.lang ? 'hPa' : 'гПа'}</span>
            </div>
        </div>
    );
};

WeatherMain.defaultProps = {
    clouds: '0',
    wind: '0',
    humidity: '0',
    pressure: '0'
};

export default WeatherMain;