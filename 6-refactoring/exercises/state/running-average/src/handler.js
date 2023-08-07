import average from './util.js';
import createMessage from './components.js';

const runningAverageHandler = () => {
    const userInput = prompt('add a number to the running average');
    if (userInput === null) {
        alert('good bye');
        return;
    }

    const newNumber = Number(userInput);
    if (Number.isNaN(newNumber) || userInput === '') {
        alert(`"${userInput}" is not a valid number`);
        return;
    }

    average(newNumber);

    // communicate result to user
    const message = createMessage();
    alert(message);
};

export default runningAverageHandler;
