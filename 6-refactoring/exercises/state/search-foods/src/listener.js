import dom from './dom.js';

import { searchFoodsHandler } from './handler.js';

const searchFoodsListener = () => {
    dom.searchBtn.addEventListener('click', () => {
        searchFoodsHandler();
    });
};

export default searchFoodsListener;
