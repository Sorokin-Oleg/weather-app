export const switchLang = (state = true, action) => {    
    switch (action.type) {        
        case 'SWICH_LANG':
            return action.switchLang;
        
        default: 
            return state;
    };    
};

export const changeUnit = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_UNIT':
            return action.changeUnit;
        
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

let STATE_CURRENT_DAY_DATA = {};

export const currentDayData = (state = {}, action) => {
    switch (action.type) {
        case 'CURRENT_DAY_FETCH_DATA_SUCCESS':
            STATE_CURRENT_DAY_DATA = {
                city: action.data.name,
                temp: action.data.main.temp,
                description: action.data.weather[0].description,
                clouds: action.data.clouds.all,
                wind: action.data.wind.speed,
                humidity: action.data.main.humidity,
                pressure: action.data.main.pressure,
                sunrise: action.data.sys.sunrise,
                sunset: action.data.sys.sunset,
                currentDate: action.data.dt,
                icon: action.data.weather[0].icon          
            };                
            return STATE_CURRENT_DAY_DATA;    

        default:
            return state;
    };
};