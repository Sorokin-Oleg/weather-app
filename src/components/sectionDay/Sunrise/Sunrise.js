import React, {Component} from 'react';
import './Sunrise.scss';

const Sunrise = (props) => {
    // Default true English
    const description = props.lang ? 'Sunrise time' : 'Время восхода';
    return (
        <div className='container-sunrise'>
            <span>04:55</span>
            <span>{description}</span>
        </div>
    );
};

export default Sunrise;