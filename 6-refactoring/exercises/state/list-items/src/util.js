import data from './data.js';

/**
 * Generates a formatted list of strings from the data module.
 *
 * @returns {string} The formatted list as a string.
 */

const list = () => {
    for (const input of data.allInputs) {
        data.stringList += `\n${data.bulletPoint} ${input}`;
    }
    return data.stringList;
};

export default list;
