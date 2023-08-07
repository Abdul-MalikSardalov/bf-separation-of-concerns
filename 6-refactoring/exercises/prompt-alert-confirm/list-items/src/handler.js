import list from './util.js';
import data from './data.js';

const listHandler = () => {
    while (data.acceptingInput) {
        const nextInput = prompt(
            'enter a list item, cancel when your are done',
        );
        if (nextInput !== null) {
            data.allInputs.push(nextInput);
        } else {
            data.acceptingInput = false;
        }
    }

    // communicate result to user
    const message = `all items:${list()}`;

    alert(message);
};

export default listHandler;
