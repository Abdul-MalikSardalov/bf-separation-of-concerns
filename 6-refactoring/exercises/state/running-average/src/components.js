import data from './data.js';

const createMessage = () => {
    return `running average: ${data.average}`;
};
export default createMessage;
