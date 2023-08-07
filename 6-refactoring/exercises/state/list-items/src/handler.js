import list from './util.js';
import data from './data.js';

const listHandler = () => {
    while (data.acceptingInput) {
        const nextInput = prompt('enter a list item');
        if (nextInput !== null) {
            data.allInputs.push(nextInput);
        } else {
            data.acceptingInput = false;
        }
    }

    // execute core logic

    const newStringList = list();

    // communicate result to user
    const message = `all items:${newStringList}`;
    alert(message);
};

export default listHandler;
