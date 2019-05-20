export const switchLang = (state = false, action) => {    
    switch (action.type) {        
        case 'SWICH_LANG':
            return action.switchLang;
        
        default: 
            return state;
    };    
};

export const changeUnit = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_UNIT':
            return action.changeUnit;
        
        default: 
            return state;
    };
};
