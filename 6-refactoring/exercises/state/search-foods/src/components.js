import search from './util.js';

const finalMessage = (query) => {
    const message = `foods matching "${query}":${search(query)}`;
    return message;
};

export default finalMessage;
