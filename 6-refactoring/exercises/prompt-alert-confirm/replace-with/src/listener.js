import replaceWithHandler from './handler.js';
import dom from './dom.js';

const replaceWithListener = () => {
    dom.button.addEventListener('click', () => {
        replaceWithHandler();
    });
};

export default replaceWithListener;
