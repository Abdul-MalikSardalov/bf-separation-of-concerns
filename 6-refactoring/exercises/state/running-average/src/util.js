import data from './data.js';

/**
 *
 */
const average = (newNumber) => {
    // execute core logic
    data.numbers.push(newNumber);
    return (data.average =
        data.numbers.reduce((sum, next) => sum + next, 0) /
        data.numbers.length);
};

export default average;
