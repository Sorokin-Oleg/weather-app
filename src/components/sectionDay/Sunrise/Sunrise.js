import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';

import './Sunrise.scss';

const Sunrise = (props) => {
    const description = props.lang ? 'Sunrise time' : 'Время восхода';
    const date = new Date((props.sunrise + props.timezone) * 1000);

    return (
        <div className='container-sunrise'>
            <span>{checkZero(date.getUTCHours()) + ':' + checkZero(date.getUTCMinutes())}</span>
            <span>{description}</span>
        </div>
    );
};

Sunrise.defaultProps = {
    sunrise: 0,
    timezone: 0
};

export default Sunrise;