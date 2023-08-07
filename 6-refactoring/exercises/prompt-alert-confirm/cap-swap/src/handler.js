import capSwap from './util.js';
import data from './data.js';

const capSwapHandler = () => {
    while (data.userInput === null) {
        data.userInput = prompt('enter a string to cap-swap');
    }

    alert(capSwap());
};

export default capSwapHandler;
