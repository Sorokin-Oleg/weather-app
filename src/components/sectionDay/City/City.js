import React, {Component} from 'react';
import './City.scss';

const City = (props) => {
    const strCity = '' + props.city;
    const renderCity = strCity.toUpperCase();

    return ( 
        <div className='container-city'>
            <span>{renderCity}</span>
        </div>
    );
};

City.defaultProps = {
    city: 'Minsk'
};

export default City;