import countEvens from './util.js';
import data from './data.js';

const averageEvensHandler = () => {
    while (data.acceptingInput) {
        const nextInput = prompt('enter a number');
        if (nextInput === null || nextInput === '') {
            data.acceptingInput = false;
            continue;
        }

        const nextNumber = Number(nextInput);
        if (Number.isNaN(nextNumber)) {
            alert(`"${nextInput}" is not a valid number`);
        } else {
            data.allNumbers.push(nextNumber);
        }
    }

    // utils function
    const average = countEvens(data);

    // communicate result to user
    const message = `average of all evens: ${average}`;
    alert(message);
};

export default averageEvensHandler;
