// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:


// Hard
// https://leetcode.com/problems/sudoku-solver/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    
    const boardSize = 9;
    const boxSize = 3;
    solve();

    function solve() {
        const pos = getEmptyCell();
        if (pos === null) return true;
        const [r, c] = pos;

        for (let i = 1; i <= 9; i++) {
            i = i.toString();
            const isValid = isValidBoard([r, c], i);

            if (!isValid) {
                continue;
            }

            board[r][c] = i;
            if(solve()) {
                return true;
            } else {
                board[r][c] = '.';
            }
        }
        return false;
    }

    function isValidBoard([r, c], value) {
        for (let i = 0; i < boardSize; i++) {
            if (board[i][c] === value && i !== r) {
                return false;
            }
        }
        for (let i = 0; i < boardSize; i++) {
            if (board[r][i] === value && i !== c) {
                return false;
            }
        }

        const boxRow = Math.floor(r / boxSize) * boxSize;
        const boxCol = Math.floor(c / boxSize) * boxSize;
        for (let i = boxRow; i < boxRow + boxSize; i++) {
            for (let j = boxCol; j < boxCol + boxSize; j++) {
                if (board[i][j] === value && r !== i && c !== j) {
                    return false;
                }
            }
        }

        return true;
    }

    function getEmptyCell() {
        for (let r = 0; r < boardSize; r++) {
            for (let c = 0; c < boardSize; c++) {
                if (board[r][c] === '.') {
                    return [r, c];
                }
            }
        }
        return null;
    }
};