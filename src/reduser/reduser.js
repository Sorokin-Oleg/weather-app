const switchLangState = () => {
    if (localStorage.getItem('lang') === null) {
        return true
    };
    return JSON.parse(localStorage.getItem('lang'))
};

export const switchLang = (state = switchLangState(), action) => {    
    switch (action.type) {        
        case 'SWICH_LANG':
            return action.switchLang;
        
        default: 
            return state;
    };    
};

const changeUnitState = () => {
    if (localStorage.getItem('unit') === null) {
        return true
    };
    return JSON.parse(localStorage.getItem('unit'))
};

export const changeUnit = (state = changeUnitState(), action) => {
    switch (action.type) {
        case 'CHANGE_UNIT':
            return action.changeUnit;
        
        default: 
            return state;
    };
};

export const getCityName = (state = '', action) => {
    switch (action.type) {
        case 'GET_CITY_NAME':
            return action.cityName;

        default:
            return state;
    };
};

export const currentDayHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'CURRENT_DAY_HAS_ERRORED':
            return action.hasErrored;

    default:
        return state;
    };
};

export const currentDayIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'CURRENT_DAY_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    };
};

export const currentDayData = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_DAY_FETCH_DATA_SUCCESS':
            state = {
                currentCity: action.data.name,
                temp: action.data.main.temp,
                description: action.data.weather[0].description,
                clouds: action.data.clouds.all,
                wind: action.data.wind.speed,
                humidity: action.data.main.humidity,
                pressure: action.data.main.pressure,
                sunrise: action.data.sys.sunrise,
                sunset: action.data.sys.sunset,
                currentDate: action.data.dt,
                icon: action.data.weather[0].icon,
                timezone: action.data.timezone         
            };                
            return state;    

        default:
            return state;
    };
};

export const weekForecastHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'WEEK_FORECAST_HAS_ERRORED':
            return action.hasErrored;

    default:
        return state;
    };
};

export const weekForecastIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'WEEK_FORECAST_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    };
};

export const weekForecastData = (state = [], action) => {
    switch (action.type) {
        case 'WEEK_FORECAST_FETCH_DATA_SUCCESS': 
            return  action.data.list;    

        default:
            return state;
    };
};
