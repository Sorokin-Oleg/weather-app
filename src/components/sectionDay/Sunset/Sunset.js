import React from 'react';
import { checkZero } from './../../../function/checkZero';

import './Sunset.scss';

const Sunset = ({lang, sunset, timezone}) => {
    const description = lang ? 'Sunset time' : 'Время заката';
    const date = new Date((sunset + timezone) * 1000);

    return (
        <div className='container-sunset'>
            <span>{checkZero(date.getUTCHours()) + ':' + checkZero(date.getUTCMinutes())}</span>
            <span>{description}</span>
        </div>
    );
};

Sunset.defaultProps = {
    sunset: 0,
    timezone: 0
};

export default Sunset;