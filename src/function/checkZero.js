/**
 * Check for a zero in the given date
 */
export const checkZero = date => (date <= 9 ? `0${date}` : date);
