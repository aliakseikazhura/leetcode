// Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.

// Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).


// Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
// Output: 2


// Medium
// https://leetcode.com/problems/battleships-in-a-board/


/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 'X'){
                const ship = getFullShip(i, j, []);
                if (!isValidShip(ship)) return 0;
                count++;
            }
        }
    }
    return count;


    function isValidShip(ship) {
        const firstRow = ship[0][0];
        const firstCol = ship[0][1];
        return ship.every(([row]) => row === firstRow) || ship.every(([, col]) => col === firstCol);
    }

    function getFullShip(row, col, res) {
        board[row][col] = '_';

        res.push([row, col]);

        if (board?.[row + 1]?.[col] === 'X') getFullShip(row + 1, col, res);
        if (board?.[row - 1]?.[col] === 'X') getFullShip(row - 1, col, res);
        if (board?.[row]?.[col + 1] === 'X') getFullShip(row, col + 1, res);
        if (board?.[row]?.[col - 1] === 'X') getFullShip(row, col - 1, res);

        return res;
    }
};



/**
x x . . x
. . x . x
. . . . x
x x . . .
 */
var countBattleships = function(board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'X'
                && board[i][j-1] !== 'X'
                && (!board[i-1] || board[i-1][j] !== 'X')) count++;
        }
    }
    return count;
};