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

    componentDidUpdate (prevProps) {
        if (prevProps.lang !== this.props.lang ||
            prevProps.unit !== this.props.unit ||
            prevProps.city !== this.props.city) {
            this.updateData();         
        };
    };

    render() {
        console.log(this.props.state);
        return(
            <section className='container-section-week'>
                <DayForecast  tempUnits={this.props.unit}/>
                <DayForecast  tempUnits={this.props.unit}/>
                <DayForecast  tempUnits={this.props.unit}/>
                <DayForecast  tempUnits={this.props.unit}/>
                <DayForecast  tempUnits={this.props.unit}/>
            </section>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        lang: state.switchLang,
        unit: state.changeUnit,
        city: state.getCityName,
        state        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(weekForecastFetchData(url))      
    };
};

SectionWeek.propTypes = {
    fetchData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (SectionWeek);
