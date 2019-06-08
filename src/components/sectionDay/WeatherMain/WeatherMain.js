import React from 'react';
import './WeatherMain.scss';

const WeatherMain = ({lang, tempUnits, clouds, wind, humidity, pressure}) => {
    const description = {
        clouds: lang ? 'Clouds': 'Облачность',
        wind: lang ? 'Wind' : 'Ветер',
        humidity: lang ? 'Humidity' : 'Влажность',
        pressure: lang ? 'Pressure' : 'Давление'
    };

    /**
     * First condition (measurement system): true - metric, false - imperial.
     * Second condition language: true -en, false - ru.
     */
    const windUnits = tempUnits ? lang ? 'm/s' : 'м/с': lang ? 'mps' : 'миль/ч';

    return ( 
        <div className='container-weather-main'>
            <div>
                <span>{description.clouds}</span>
                <span>{Math.round(clouds)} %</span>
            </div>
            <div>
                <span>{description.wind}</span>
                <span>{Math.round(wind)} {windUnits}</span>
            </div>
            <div>
                <span>{description.humidity}</span>
                <span>{Math.round(humidity)} %</span>
            </div>
            <div>
                <span>{description.pressure}</span>
                <span>{Math.round(pressure)} {lang ? 'hPa' : 'гПа'}</span>
            </div>
        </div>
    );
};

WeatherMain.defaultProps = {
    clouds: 0,
    wind: 0,
    humidity: 0,
    pressure: 0,
};

export default WeatherMain;