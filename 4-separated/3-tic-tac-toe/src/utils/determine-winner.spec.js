import { determineWinner } from './determine-winner.js';

describe('determineWinner', () => {
    it('should return "X" when there is a horizontal top row win', () => {
        const board = ['X', 'X', 'X', null, null, null, null, null, null];
        const winner = determineWinner(board);
        expect(winner).toBe('X');
    });

    it('should return "O" when there is a vertical middle column win', () => {
        const board = [null, 'O', null, null, 'O', null, null, 'O', null];
        const winner = determineWinner(board);
        expect(winner).toBe('O');
    });

    it('should return "X" when there is a diagonal win from top left to bottom right', () => {
        const board = ['X', null, null, null, 'X', null, null, null, 'X'];
        const winner = determineWinner(board);
        expect(winner).toBe('X');
    });

    it('should return null when there is no winner', () => {
        const board = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
        const winner = determineWinner(board);
        expect(winner).toBe(null);
    });
});
