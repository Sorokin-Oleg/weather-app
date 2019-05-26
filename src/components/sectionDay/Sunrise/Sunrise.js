import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './Sunrise.scss';

const Sunrise = (props) => {
    const description = props.lang ? 'Sunrise time' : 'Время восхода';
    const calcTime = props.sunrise + props.timezone;
    const date = new Date(calcTime * 1000);

    return (
        <div className='container-sunrise'>
            <span>{checkZero(date.getUTCHours()) + ':' + checkZero(date.getUTCMinutes())}</span>
            <span>{description}</span>
        </div>
    );
};

Sunrise.defaultProps = {
    sunrise: '0'
};

export default Sunrise;