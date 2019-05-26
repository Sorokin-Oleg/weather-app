import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './Sunset.scss';

const Sunset = (props) => {

    const description = props.lang ? 'Sunset time' : 'Время заката';
    const calcTime = props.sunset + props.timezone;
    const date = new Date(calcTime * 1000);

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