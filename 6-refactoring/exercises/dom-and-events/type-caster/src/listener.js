import castTheValue from './handler.js';
import dom from './data.js';
const castTheValueListener = () => {
    dom.input.addEventListener('click', (event) => {
        castTheValue(event);
    });
};

export default castTheValueListener;
