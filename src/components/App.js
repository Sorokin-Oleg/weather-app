import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCityName } from './../actions/actions';
import { currentBackground } from './../function/currentBackground';

import SectionDay from './sectionDay/SectionDay';
import SectionWeek from './sectionWeek/SectionWeek';

import './App.scss'

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.firstCityState = this.firstCityState.bind(this);
        this.geolocationSuccess = this.geolocationSuccess.bind(this); 
        this.geolocationError = this.geolocationError.bind(this);     
    };

    /**
     * Actions performed in case of a failed geodata request
     * @param {Error name(code)} error 
     */
    geolocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
            case error.POSITION_UNAVAILABLE:
            case error.TIMEOUT:
            case error.UNKNOWN_ERROR:
                this.props.dispatch(getCityName('q=Minsk'));
            break;
        };
    };

    geolocationSuccess(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.props.dispatch(getCityName('lat=' + lat + '&lon=' + lon));
    };

    /**
     * When you first start the application, we check the local storage for the presence of the saved city name.
     * If available, we send to the reducer, in the absence we request user geodata.
     * With the consent of the user, the received geodata is sent to the reducer,
     * in case of disagreement, or if there is a geodata error, we send the default value to the reducer.
     */
    firstCityState() {   
        if (localStorage.getItem('city') === null || localStorage.getItem('city').length === 2) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.geolocationSuccess, this.geolocationError);
            };
        } else {
            this.props.dispatch(getCityName(localStorage.getItem('city')));
        };
    };

    componentDidMount() {
        this.firstCityState();
    };

    render() {        
        return (
            <div className='container-app' style={currentBackground(this.props.icon)}>
                <SectionWeek/>
                <SectionDay/>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        icon: state.currentDayData.icon,
        error: state.currentDayHasErrored
    };
};

export default connect(mapStateToProps) (App);