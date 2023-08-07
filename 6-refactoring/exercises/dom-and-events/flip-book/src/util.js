/**
 * Converts the input string to uppercase and reverses its characters.
 *
 * @param {string} input - The input string to be processed.
 * @returns {string} The input string with characters in uppercase and in reverse order.
 */

const reverseAndUpper = (input) => {
    // execute core logic
    const upperCased = input.toUpperCase();
    const splitted = upperCased.split('');
    const reversed = splitted.reverse();
    const reversedUppercase = reversed.join('');

    return reversedUppercase;
};

export default reverseAndUpper;
