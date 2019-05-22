import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './Sunset.scss';

const Sunset = (props) => {

    const description = props.lang ? 'Sunset time' : 'Время заката';
    const date = new Date(props.sunset * 1000);

    return (
        <div className='container-sunset'>
            <span>{checkZero(date.getHours() + ':' + checkZero(date.getMinutes()))}</span>
            <span>{description}</span>
        </div>
    );
};

Sunset.propsDefault = {
    sunset: '0'
};

export default Sunset;