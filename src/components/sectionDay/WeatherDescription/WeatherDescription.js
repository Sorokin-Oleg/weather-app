import React from 'react';
import './WeatherDescription.scss';

const WeatherDescription = ({description}) => (
    <div className='container-weather-description'>
        <span>{description.toUpperCase()}</span>
    </div>
);

WeatherDescription.defaultProps = {
    description: 'clouds'
};

export default WeatherDescription;