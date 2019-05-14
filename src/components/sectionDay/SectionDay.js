import React, { Component } from 'react';
import Search from './Search/Search';
import Sunrise from './Sunrise/Sunrise';
import Sunset from './Sunset/Sunset';
import LangButton from './LangButton/LangButton';
import City from './City/City';
import Temperature from './Temperature/Temperature';
import WeatherIcon from './WeatherIcon/WeatherIcon';
import WeatherDescription from './WeatherDescription/WeatherDescription';
import CurrentDate from './CurrentDate/CurrentDate';
import WeatherMain from './WeatherMain/WeatherMain';
import './SectionDay.scss';


class SectionDay extends React.Component {
    render() {
        return (
            <section className='container-section-day'>
                <Search/>
                <Sunrise/>
                <LangButton/>
                <Sunset/>
                <City/>
                <Temperature/>
                <WeatherIcon/>
                <WeatherDescription/>
                <CurrentDate/>
                <WeatherMain/>
            </section>
        );
    };
};

export default SectionDay;