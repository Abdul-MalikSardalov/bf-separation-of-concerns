/**
 * render a paragraph with optional styling
 *
 * @param {string} text - the paragraph text
 * @param {string[]} [classList=[]] - an array of classes to apply
 * @returns {HTMLParagraphElement} a rendered paragraph element
 */
const paragraph = (text, classList = []) => {
    const p = document.createElement('p');
    p.innerHTML = text;

    classList.forEach((classes) => {
        p.classList.add(classes);
    });

    return p;
};

export default paragraph;
