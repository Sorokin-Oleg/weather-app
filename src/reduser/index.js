import { combineReducers } from 'redux';
import { switchLang, changeUnit } from './reduser';

export default combineReducers({
    switchLang,
    changeUnit
});
