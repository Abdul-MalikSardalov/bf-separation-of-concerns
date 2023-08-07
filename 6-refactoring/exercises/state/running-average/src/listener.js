import dom from './dom.js';
import runningAverageHandler from './handler.js';

const runningAverageListener = () => {
    dom.averageBtn.addEventListener('click', () => {
        runningAverageHandler();
    });
};

export default runningAverageListener;
