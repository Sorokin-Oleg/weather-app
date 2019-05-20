export const switchLang = (bool) => {
    return {
        type: 'SWICH_LANG',
        switchLang: bool
    };
};

export const changeUnit = (bool) => {
    return {
        type: 'CHANGE_UNIT',
        changeUnit: bool
    };
};