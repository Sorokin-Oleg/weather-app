import React, {Component} from 'react';
import './Sunset.scss';

const Sunset = (props) => {
    // Default true English
    const description = props.lang ? 'Sunset time' : 'Время заката';
    return (
        <div className='container-sunset'>
            <span>20:40</span>
            <span>{description}</span>
        </div>
    );
};

export default Sunset;