import reverseAndUpper from './util.js';
import dom from './dom.js';

export const reverseAndUpperHandler = (event) => {
    const input = event.target.value;

    // render result for user
    dom.output.innerHTML = reverseAndUpper(input);
};
