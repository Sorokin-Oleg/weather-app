import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { currentDayFetchData } from './../../actions/actions';
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
import { currentDayData } from './../../reduser/reduser';


class SectionDay extends React.Component { 

    componentDidMount() {
        this.props.fetchData('https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&units=metric&appid=33c970bfa5f1615719f1302f43d324db');
    };    

    render() {
        return (            
            <section className='container-section-day'>
                <Search 
                    lang={this.props.lang}
                />
                <Sunrise
                    lang={this.props.lang}
                    sunrise={this.props.sunrise}
                />
                <LangButton
                    lang={this.props.lang}
                />
                <Sunset
                    lang={this.props.lang}
                    sunset={this.props.sunset}
                />
                <City
                    city={this.props.city}                    
                />
                <Temperature
                    tempUnits={this.props.unit}
                    temp={this.props.temp}
                />
                <WeatherIcon
                    icon={this.props.icon}
                />
                <WeatherDescription
                    description={this.props.description}
                />
                <CurrentDate
                    currentDate={this.props.currentDate}
                    lang={this.props.lang}
                />
                <WeatherMain
                    lang={this.props.lang}
                    tempUnits={this.props.unit}
                    clouds={this.props.clouds}
                    wind={this.props.wind}
                    humidity={this.props.humidity}
                    pressure={this.props.pressure}
                />
            </section>                        
        );        
    };    
};

SectionDay.propTypes = {
    fetchData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang,
        unit: state.changeUnit,
        error: state.currentDayHasErrored,
        city: state.currentDayData.city,
        temp: state.currentDayData.temp,
        description: state.currentDayData.description,
        clouds: state.currentDayData.clouds,
        wind: state.currentDayData.wind,
        humidity: state.currentDayData.humidity,
        pressure: state.currentDayData.pressure,
        sunrise: state.currentDayData.sunrise,
        sunset: state.currentDayData.sunset,
        currentDate: state.currentDayData.currentDate,
        icon: state.currentDayData.icon
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(currentDayFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (SectionDay);