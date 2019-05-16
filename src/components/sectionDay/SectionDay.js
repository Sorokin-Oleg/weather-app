import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
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
                <Search 
                    lang={this.props.app.lang}
                />
                <Sunrise
                    lang={this.props.app.lang}
                />
                <LangButton
                    lang={this.props.app.lang}
                />
                <Sunset
                    lang={this.props.app.lang}
                />
                <City/>
                <Temperature/>
                <WeatherIcon/>
                <WeatherDescription/>
                <CurrentDate/>
                <WeatherMain
                    lang={this.props.app.lang}
                />
            </section>
        );
    };
};

const mapStateToProps = state => {
    return {
        app: state        
    };
};

export default connect(mapStateToProps) (SectionDay);