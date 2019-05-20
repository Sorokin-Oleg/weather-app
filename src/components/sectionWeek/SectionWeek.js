import React, {Component} from 'react';
import { connect } from 'react-redux';
import DayForecast from './DayForecast/DayForecast';
import './SectionWeek.scss';


class SectionWeek extends React.Component {
    render() {
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
        lang: state.swichLang,
        unit: state.changeUnit         
    };
};

export default connect(mapStateToProps) (SectionWeek);
