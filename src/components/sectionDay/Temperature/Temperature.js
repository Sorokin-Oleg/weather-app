import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeUnit } from './../../../actions/actions';
import './Temperature.scss';

class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.ChangeUnits = this.ChangeUnits.bind(this);
    };

    ChangeUnits() {
        let bool = !this.props.tempUnits;
        this.props.dispatch(changeUnit(bool));
    };

    render () {
        return ( 
            <div className='container-temp'>
                <div className='content-temp'>
                    <span id='temp'>{this.props.temp}°</span>
                    <div className='content-button-temp'>
                        <span>{this.props.tempUnits ? 'C': 'F'}</span>
                        <button onClick={this.ChangeUnits}>{this.props.tempUnits ? 'F': 'C'}</button>
                    </div>
                </div>
            </div>
        );
    };
};

Temperature.defaultProps = {
    temp: '0',
    tempUnits: 'C'
};

export default connect() (Temperature);