import React, {Component} from 'react';
import './City.scss';

const City = (props) => {
    const strCity = '' + props.currentCity;
    const renderCity = strCity.toUpperCase();

    return ( 
        <div className='container-city'>
            <span>{renderCity}</span>
        </div>
    );
};

City.defaultProps = {
    currentCity: 'City'
};

export default City;