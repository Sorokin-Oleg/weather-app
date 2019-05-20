import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        console.log(this.props.state); 
        return (
            <section className='container-section-day'>
                <Search 
                    lang={this.props.lang}
                />
                <Sunrise
                    lang={this.props.lang}
                />
                <LangButton
                    lang={this.props.lang}
                />
                <Sunset
                    lang={this.props.lang}
                />
                <City/>
                <Temperature
                    tempUnits={this.props.unit}
                />
                <WeatherIcon/>
                <WeatherDescription/>
                <CurrentDate/>
                <WeatherMain
                    lang={this.props.lang}
                    tempUnits={this.props.unit}
                />
            </section>                        
        );        
    };    
};

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang,
        unit: state.changeUnit
    };
};

export default connect(mapStateToProps) (SectionDay);