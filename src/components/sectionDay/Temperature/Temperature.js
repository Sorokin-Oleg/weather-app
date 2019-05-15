import React, {Component} from 'react';
import './Temperature.scss';

const Temperature = (props) => {
    return ( 
        <div className='container-temp'>
            <div className='content-temp'>
                <span id='temp'>22°</span>
                <div className='content-button-temp'>
                    <span>C</span>
                    <button>F</button>
                </div>
            </div>
        </div>
    );
};

export default Temperature;