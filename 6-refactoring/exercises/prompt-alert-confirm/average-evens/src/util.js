import data from './data.js';
/**
 *
 */
const countEvens = () => {
    // execute core logic

    for (const num of data.allNumbers) {
        if (num % 2 === 0) {
            data.sumOfEvens = data.sumOfEvens + num;
            data.howManyEvens = data.howManyEvens + 1;
        }
    }
    const average =
        data.howManyEvens === 0 ? 0 : data.sumOfEvens / data.howManyEvens;
    return average;
};

export default countEvens;
