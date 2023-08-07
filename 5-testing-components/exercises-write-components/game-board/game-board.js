/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */

const gameBoard = (boardData) => {
    const table = document.createElement('table');

    boardData.forEach((row) => {
        const tr = document.createElement('tr');

        row.forEach((cell) => {
            const td = document.createElement('td');

            td.innerHTML = cell;

            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    return table;
};

export default gameBoard;
