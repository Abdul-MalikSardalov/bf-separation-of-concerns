import saveNoCopiesHandler from './handler.js';
import dom from './dom.js';

const saveNoCopiesListener = () => {
    dom.btn.addEventListener('click', () => {
        saveNoCopiesHandler();
    });
};

export default saveNoCopiesListener;
