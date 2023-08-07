import { showMouseCoordinates } from './handler.js';
import dom from './data.js';

export const showMouseCoordinateListener = () => {
    dom.section.addEventListener('mousemove', (e) => {
        showMouseCoordinates(e);
    });
};
