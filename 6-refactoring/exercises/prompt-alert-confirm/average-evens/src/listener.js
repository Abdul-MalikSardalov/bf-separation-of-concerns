import averageEvensHandler from './handler.js';
import dom from './dom.js';

const averageEvensListener = () => {
    dom.buttonAverage.addEventListener('click', (data) => {
        averageEvensHandler(data);
    });
};

export default averageEvensListener;
