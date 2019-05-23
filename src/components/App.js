import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentBackground } from './../function/currentBackground';
import SectionDay from './sectionDay/SectionDay';
import SectionWeek from './sectionWeek/SectionWeek';
import './App.scss'

const App = (props) => {      
    return (
        <div className='container-app' style={currentBackground(props.icon)}>
            <SectionWeek/>
            <SectionDay/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        icon: state.currentDayData.icon
    };
};

export default connect(mapStateToProps) (App);