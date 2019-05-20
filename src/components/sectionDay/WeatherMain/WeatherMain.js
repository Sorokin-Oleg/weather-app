import React, {Component} from 'react';
import './WeatherMain.scss';

const WeatherMain = (props) => {
    // Defaulut true English
    const description = {
        clouds: props.lang ? 'Clouds': 'Облачность',
        wind: props.lang ? 'Wind' : 'Ветер',
        hymidity: props.lang ? 'Hymidity' : 'Влажность',
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
                <span>4 %</span>
            </div>
            <div>
                <span>{description.wind}</span>
                <span>2 {windUnits}</span>
            </div>
            <div>
                <span>{description.hymidity}</span>
                <span>75%</span>
            </div>
            <div>
                <span>{description.pressure}</span>
                <span>710.00 {props.lang ? 'hPa' : 'гПа'}</span>
            </div>
        </div>
    );
};

export default WeatherMain;