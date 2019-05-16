import React, {Component} from 'react';
import './WeatherMain.scss';

const WeatherMain = (props) => {
    // Defaulut true English
    const description = {
        visibility: props.lang ? 'Visibility': 'Видимость',
        wind: props.lang ? 'Wind' : 'Ветер',
        hymidity: props.lang ? 'Hymidity' : 'Влажность',
        pressure: props.lang ? 'Pressure' : 'Давление'
    };

    return ( 
        <div className='container-weather-main'>
            <div>
                <span>{description.visibility}</span>
                <span>4 km</span>
            </div>
            <div>
                <span>{description.wind}</span>
                <span>2 m/s</span>
            </div>
            <div>
                <span>{description.hymidity}</span>
                <span>75%</span>
            </div>
            <div>
                <span>{description.pressure}</span>
                <span>710.00 mm</span>
            </div>
        </div>
    );
};

export default WeatherMain;