import listHandler from './handler.js';
import dom from './dom.js';

const listListener = () => {
    dom.listBtn.addEventListener('click', () => {
        listHandler();
    });
};

export default listListener;
