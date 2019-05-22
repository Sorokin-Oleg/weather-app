import React, {Component} from 'react';
import { checkZero } from './../../../function/checkZero';
import './CurrentDate.scss';

const CurrentDate = (props) => {
    const mounths = {
        en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        ru: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']
    };
    const date = new Date(props.currentDate * 1000);
    const currentDate = props.lang ? mounths.en[date.getMonth()] + ' ' + checkZero(date.getDate()) + ', ' + date.getFullYear():
                                     checkZero(date.getDate()) + ' ' + mounths.ru[date.getMonth()] + ', ' + date.getFullYear();
    return ( 
        <div className='container-current-date'>
            <span>{currentDate}</span>
        </div>
    );
};

export default CurrentDate;