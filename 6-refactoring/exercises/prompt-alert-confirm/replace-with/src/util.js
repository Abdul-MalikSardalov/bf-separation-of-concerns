import data from './data.js';

/**
 *
 */
const replaceWith = (stringToReplacify, oldChar, newChar) => {
    // execute core logic
    for (const char of stringToReplacify) {
        if (char === oldChar) {
            data.newString += newChar;
        } else {
            data.newString += char;
        }
    }
    return data.newString;
};

export default replaceWith;
