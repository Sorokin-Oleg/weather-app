import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { currentDayFetchData} from './../../actions/actions';
import { API_KEY } from './../../const/apiKey';

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
    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this); 
        this.setLocalStorgateCity = this.setLocalStorgateCity.bind(this);                 
    };

    /**
     * If the request to the API is successful, we write the name of the city in the local storage
     */
    setLocalStorgateCity() {
        localStorage.setItem('city', 'q=' + this.props.currentCity);
    };

    /**
     * Creating a URL to query the weather API server
     */
    updateData() {
        const city = this.props.city;
        const lang = this.props.lang ? '&lang=en' : '&lang=ru';
        const units = this.props.unit ? '&units=metric' : '&units=imperial';        
        const URL = 'https://api.openweathermap.org/data/2.5/weather?' + city + lang + units + API_KEY;

        this.props.fetchData(URL);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.lang !== this.props.lang ||
            prevProps.unit !== this.props.unit ||
            prevProps.city !== this.props.city) {
            this.updateData();         
        };

        if (prevProps.currentCity !== this.props.currentCity) {
            this.setLocalStorgateCity();
        };
    };

    render() {
        return (            
            <section className='container-section-day'>
                <Search 
                    lang={this.props.lang}
                    error={this.props.error}
                />
                <Sunrise
                    lang={this.props.lang}
                    sunrise={this.props.sunrise}
                    timezone={this.props.timezone}
                />
                <LangButton
                    lang={this.props.lang}
                />
                <Sunset
                    lang={this.props.lang}
                    sunset={this.props.sunset}
                    timezone={this.props.timezone}
                />
                <City
                    currentCity={this.props.currentCity}                    
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
                    timezone={this.props.timezone}
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
};

SectionDay.defaultProps = {
    currentCity: ''
};

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang,
        unit: state.changeUnit,
        error: state.currentDayHasErrored,
        currentCity: state.currentDayData.currentCity,
        temp: state.currentDayData.temp,
        description: state.currentDayData.description,
        clouds: state.currentDayData.clouds,
        wind: state.currentDayData.wind,
        humidity: state.currentDayData.humidity,
        pressure: state.currentDayData.pressure,
        sunrise: state.currentDayData.sunrise,
        sunset: state.currentDayData.sunset,
        currentDate: state.currentDayData.currentDate,
        icon: state.currentDayData.icon,
        city: state.getCityName,
        timezone: state.currentDayData.timezone
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(currentDayFetchData(url))      
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (SectionDay);