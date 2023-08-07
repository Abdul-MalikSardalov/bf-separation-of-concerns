import finalMessage from './components.js';

export const searchFoodsHandler = () => {
    // read & process user input
    const query = prompt('enter a search query');
    if (query === null || query === '') {
        return;
    }

    alert(finalMessage(query));
};
