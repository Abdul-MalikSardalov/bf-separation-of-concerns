import data from './data.js';
/**
 *
 */
const saveNoCopies = () => {
    // execute core logic
    const alreadySaved = data.noCopies.includes(data.userInput);
    if (!alreadySaved) {
        return data.noCopies.push(data.userInput);
    }
};

export default saveNoCopies;
