import saveNoCopies from './util.js';
import data from './data.js';

const saveNoCopiesHandler = () => {
    data.userInput = null;
    while (data.userInput === null) {
        data.userInput = prompt('enter a string to save');
    }

    saveNoCopies();

    // communicate result to user
    const message = data.noCopies.join(', ');
    alert(message);
};

export default saveNoCopiesHandler;
