import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { getCityName } from './../actions/actions';
import { currentBackground } from './../function/currentBackground';

import SectionDay from './sectionDay/SectionDay';
import SectionWeek from './sectionWeek/SectionWeek';

import './App.scss'

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.firstCityState = this.firstCityState.bind(this);       
    };

    firstCityState() {
        if (localStorage.getItem('city') === null || localStorage.getItem('city').length === 0) {
        
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
        icon: state.currentDayData.icon
    };
};

export default connect(mapStateToProps) (App);