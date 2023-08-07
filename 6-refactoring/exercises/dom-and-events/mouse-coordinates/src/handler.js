import { formatCoordinates } from './util.js';
import dom from './data.js';

export const showMouseCoordinates = (e) => {
    debugger;
    // read & process user input
    const xValue = e.pageX;
    const yValue = e.pageY;

    // execute core logic
    const formattedCoordinates = formatCoordinates(xValue, yValue);

    // render result for user
    dom.pre.innerHTML = formattedCoordinates;
};
