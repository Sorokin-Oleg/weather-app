/**
 * Check for a zero in the given date
 */
export const checkZero = (date) => {
    if (date <= 9) {
        return '0' + date;
    };
    return date;
};