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


class SectionDay extends React.Component { 

    componentDidMount() {
        this.props.fetchData('https://api.openweathermap.org/data/2.5/find?q=Minsk%20%20&units=metric&lang=ru&units=metric&appid=33c970bfa5f1615719f1302f43d324db');
    };

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

SectionDay.propTypes = {
    fetchData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        // lang: state.switchLang,
        // unit: state.changeUnit
        state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(currentDayFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (SectionDay);