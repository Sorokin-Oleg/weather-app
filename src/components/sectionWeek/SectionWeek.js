import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_KEY } from './../../const/apiKey';
import { weekForecastFetchData } from './../../actions/actions';
import DayForecast from './DayForecast/DayForecast';

import './SectionWeek.scss';

class SectionWeek extends React.Component {
    constructor(props) {
        super(props);

        this.updateData = this.updateData.bind(this);
        this.filterData = this.filterData.bind(this);
    };

    /**
     * Creating a URL to query the weather API server
     */
    updateData() {
        const city = this.props.city;
        const lang = this.props.lang ? '&lang=en' : '&lang=ru';
        const units = this.props.unit ? '&units=metric' : '&units=imperial';        
        const URL = 'https://api.openweathermap.org/data/2.5/forecast?' + city + lang + units + API_KEY;

        this.props.fetchData(URL);
    };

    /**
     * Filter API Data
     */
    filterData() {
        return (
            this.props.weekArray.filter(item => {            
                const date = new Date((this.props.timezone + item.dt) * 1000);          
                return date.getUTCHours() >= 14 && date.getUTCHours() <= 16 ;                 
            })
        );
    };

    componentDidUpdate (prevProps) {
        if (prevProps.lang !== this.props.lang ||
            prevProps.unit !== this.props.unit ||
            prevProps.city !== this.props.city) {
            this.updateData();                          
        };
    };

    render() {  
        const element = this.filterData().map((item,index) => {
            return <DayForecast
                key={index}          
                tempUnits={this.props.unit}
                date={item.dt}
                temp={item.main.temp}
                description={item.weather[0].description}
                icon={item.weather[0].icon}
                timezone={this.props.timezone}
                lang={this.props.lang}                 
            />
        });

        return(
            <section className='container-section-week'>
                {element}
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang,
        unit: state.changeUnit,
        city: state.getCityName,
        weekArray: state.weekForecastData,
        timezone: state.currentDayData.timezone
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(weekForecastFetchData(url))      
    };
};

SectionWeek.propTypes = {
    fetchData: PropTypes.func.isRequired,
    weekArray: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps) (SectionWeek);
