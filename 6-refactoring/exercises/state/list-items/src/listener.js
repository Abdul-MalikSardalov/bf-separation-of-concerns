import listHandler from './handler.js';
import dom from './dom.js';
const listListener = () => {
    dom.btn.addEventListener('click', () => {
        listHandler();
    });
};

export default listListener;
