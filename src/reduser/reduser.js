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

export const currentDayData = (state = [], action) => {
    switch (action.type) {
        case 'CURRENT_DAY_FETCH_DATA_SUCCESS':
            return action.data;

        default:
            return state;
    };
};