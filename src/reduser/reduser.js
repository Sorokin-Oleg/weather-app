const reduser = (state = [], action) => {
    switch (action.type) {
        case "LANG":
        return state = action.data;
        default:
        return state;
    };
};
export default reduser;
