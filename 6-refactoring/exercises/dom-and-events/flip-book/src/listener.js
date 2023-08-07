import { reverseAndUpperHandler } from './handler.js';

const reverseAndUpperListener = () => {
    document.getElementById('input').addEventListener('keyup', (event) => {
        reverseAndUpperHandler(event);
    });
};

// reverseAndUpperListener();

export default reverseAndUpperListener;
