import capSwapHandler from './handler.js';
import dom from './dom.js';
const capSwapListener = () => {
    dom.swapBtn.addEventListener('click', (e) => {
        capSwapHandler(e);
    });
};

export default capSwapListener;
