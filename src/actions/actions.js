/**
 * Action to change application language
 */
export const switchLang = bool => {
  return {
    type: "SWICH_LANG",
    switchLang: bool,
  };
};

/**
 *  Action to change application units
 */
export const changeUnit = bool => {
  return {
    type: "CHANGE_UNIT",
    changeUnit: bool,
  };
};

/**
 * @param {Name of the city entered by the user} name
 */
export const getCityName = name => {
  return {
    type: "GET_CITY_NAME",
    cityName: name,
  };
};

/**
 * We pass to the reducer a boolean value about the presence of an error
 */
export const currentDayHasErrored = bool => {
  return {
    type: "CURRENT_DAY_HAS_ERRORED",
    hasErrored: bool,
  };
};

/**
 * We pass a boolean value to the reducer when the data is successfully loaded
 */
export const currentDayIsLoading = bool => {
  return {
    type: "CURRENT_DAY_IS_LOADING",
    isLoading: bool,
  };
};

/**
 * Transfer to downloaded data reducer
 */
export const currentDayFetchDataSuccess = data => {
  return {
    type: "CURRENT_DAY_FETCH_DATA_SUCCESS",
    data,
  };
};

/**
 * We receive data from external API.
 * We change the props to true if the data was able to load, to lie if the data was not loaded.
 * If there is an error in the path, then the error with the error is true.
 */
export const currentDayFetchData = url => {
  return dispatch => {
    dispatch(currentDayHasErrored(false));
    dispatch(currentDayIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(currentDayIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(currentDayFetchDataSuccess(data)))
      .catch(() => dispatch(currentDayHasErrored(true)));
  };
};

/**
 * We pass to the reducer a boolean value about the presence of an error
 */
export const weekForecastHasErrored = bool => {
  return {
    type: "WEEK_FORECAST_HAS_ERRORED",
    hasErrored: bool,
  };
};

/**
 * We pass a boolean value to the reducer when the data is successfully loaded
 */
export const weekForecastIsLoading = bool => {
  return {
    type: "WEEK_FORECAST_IS_LOADING",
    isLoading: bool,
  };
};

/**
 * Transfer to downloaded data reducer
 */
export const weekForecastFetchDataSuccess = data => {
  return {
    type: "WEEK_FORECAST_FETCH_DATA_SUCCESS",
    data,
  };
};

/**
 * We receive data from external API.
 * We change the props to true if the data was able to load, to lie if the data was not loaded.
 * If there is an error in the path, then the error with the error is true.
 */
export const weekForecastFetchData = url => {
  return dispatch => {
    dispatch(weekForecastHasErrored(false));
    dispatch(weekForecastIsLoading(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(weekForecastIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(weekForecastFetchDataSuccess(data)))
      .catch(() => dispatch(weekForecastHasErrored(true)));
  };
};
