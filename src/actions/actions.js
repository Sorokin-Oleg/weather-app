/**
 * Action to change application language
 */
export const switchLang = (bool) => {
    return {
        type: 'SWICH_LANG',
        switchLang: bool
    };
};

/**
 *  Action to change application units
 */
export const changeUnit = (bool) => {
    return {
        type: 'CHANGE_UNIT',
        changeUnit: bool
    };
};

/**
 * We pass to the reducer a boolean value about the presence of an error
 */
export const currentDayHasErrored = (bool) => {
    return {
        type: 'CURRENT_DAY_HAS_ERRORED',
        hasErrored: bool
    };
};

/**
 * We pass a boolean value to the reducer when the data is successfully loaded
 */
export const currentDayIsLoading = (bool) => {
    return {
        type: 'CURRENT_DAY_IS_LOADING',
        isLoading: bool
    };
};

/**
 * Transfer to downloaded data reducer
 */
export const currentDayFetchDataSuccess = (data) => {
    return {
        type: 'CURRENT_DAY_FETCH_DATA_SUCCESS',
        data
    };
};

export const currentDayFetchData = (url) => {
    return (dispatch) => {
        dispatch(currentDayIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                };

            dispatch(currentDayIsLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((data) => dispatch(currentDayFetchDataSuccess(data)))
        .catch(() => dispatch(currentDayHasErrored(true)));
    };
};