import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import { MOUNTHS } from './../../../const/mounths';

import './CurrentDate.scss';

const CurrentDate = (props) => {
    const date = new Date((props.currentDate + props.timezone) * 1000);
    const currentDate = props.lang ? MOUNTHS.en[date.getUTCMonth()] + ' ' + checkZero(date.getUTCDate()) + ', ' + date.getUTCFullYear():
                                     checkZero(date.getUTCDate()) + ' ' + MOUNTHS.ru[date.getUTCMonth()] + ', ' + date.getUTCFullYear();
    return ( 
        <div className='container-current-date'>
            <span>{currentDate}</span>
        </div>
    );
};

CurrentDate.defaultProps = {
    currentDate: 0,
    timezone: 0
};

export default CurrentDate;