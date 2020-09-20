import { combineReducers } from "redux";
import {
  switchLang,
  changeUnit,
  currentDayHasErrored,
  currentDayIsLoading,
  currentDayData,
  getCityName,
  weekForecastHasErrored,
  weekForecastIsLoading,
  weekForecastData,
} from "./reduser";

export default combineReducers({
  switchLang,
  changeUnit,
  currentDayHasErrored,
  currentDayIsLoading,
  currentDayData,
  getCityName,
  weekForecastHasErrored,
  weekForecastIsLoading,
  weekForecastData,
});
