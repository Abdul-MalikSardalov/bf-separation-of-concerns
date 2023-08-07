import data from './data.js';
/**
 *
 */
const list = () => {
    let stringList = '';
    for (const input of data.allInputs) {
        stringList += `\n- ${input}`;
    }
    return stringList;
};

export default list;
