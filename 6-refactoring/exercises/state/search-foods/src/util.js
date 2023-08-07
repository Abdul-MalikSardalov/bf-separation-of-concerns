import data from './data.js';

/**
 *
 */
const search = (userInput) => {
    const results = data.foods
        .filter((food) => food.includes(userInput))
        .map((food) => `\n- ${food}`)
        .join('');

    return results;
};

export default search;
