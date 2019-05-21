import { combineReducers } from 'redux';
import { switchLang, changeUnit, currentDayHasErrored, currentDayIsLoading, currentDayData } from './reduser';

export default combineReducers({
    switchLang,
    changeUnit,
    currentDayHasErrored,
    currentDayIsLoading,
    currentDayData
});
