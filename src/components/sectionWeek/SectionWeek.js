import React, {Component} from 'react';
import DayForecast from './DayForecast/DayForecast';
import './SectionWeek.scss';


class SectionWeek extends React.Component {
    render() {
        return(
            <section className='container-section-week'>
                <DayForecast/>
                <DayForecast/>
                <DayForecast/>
                <DayForecast/>
                <DayForecast/>
            </section>
        );
    };
};

export default SectionWeek;
