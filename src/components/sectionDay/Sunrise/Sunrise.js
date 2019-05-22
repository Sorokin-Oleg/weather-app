import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './Sunrise.scss';

const Sunrise = (props) => {
    const description = props.lang ? 'Sunrise time' : 'Время восхода';
    const date = new Date(props.sunrise * 1000);

    return (
        <div className='container-sunrise'>
            <span>{checkZero(date.getHours()) + ':' + checkZero(date.getMinutes())}</span>
            <span>{description}</span>
        </div>
    );
};

Sunrise.defaultProps = {
    sunrise: '0'
};

export default Sunrise;