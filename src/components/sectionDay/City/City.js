import React from 'react';
import './City.scss';

const City = ({currentCity}) => (
    <div className='container-city'>
        <span>{currentCity.toUpperCase()}</span>
    </div>
);

City.defaultProps = {
    currentCity: 'City'
};

export default City;