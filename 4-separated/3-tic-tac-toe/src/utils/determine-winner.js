/*
  can you add a utils function to determine if a player has won the game?
*/

export const determineWinner = (board = []) => {
    const winningCombinations = [
        [0, 1, 2], // горизонтальная верхняя
        [3, 4, 5], // горизонтальная средняя
        [6, 7, 8], // горизонтальная нижняя
        [0, 3, 6], // вертикальная левая
        [1, 4, 7], // вертикальная средняя
        [2, 5, 8], // вертикальная правая
        [0, 4, 8], // диагональ слева направо
        [2, 4, 6], // диагональ справа налево
    ];
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            board[a] !== null &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a];
        }
    }

    return null;
};
