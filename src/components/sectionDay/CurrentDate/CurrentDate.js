import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './CurrentDate.scss';

const CurrentDate = (props) => {
    const mounths = {
        en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        ru: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
    };
    const calcTime = props.currentDate + props.timezone;
    const date = new Date(calcTime * 1000);
    const currentDate = props.lang ? mounths.en[date.getUTCMonth()] + ' ' + checkZero(date.getUTCDate()) + ', ' + date.getUTCFullYear():
                                     checkZero(date.getUTCDate()) + ' ' + mounths.ru[date.getUTCMonth()] + ', ' + date.getUTCFullYear();
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