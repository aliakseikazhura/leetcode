// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.


// Input: n = 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

// Input: n = 1
// Output: 1

// Hard
// https://leetcode.com/problems/n-queens-ii/


/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let grid = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    let count = 0;
    dfs(0);
    return count;

    function dfs(row) {
        if (row === n) {
            count++;
            return true;
        }

        for (let col = 0; col < n; col++) {
            if (isValidBoard(row, col)) {
                grid[row][col] = 'Q';
                dfs(row + 1);
                grid[row][col] = '.';
            }
        }
    }

    function isValidBoard(row, col) {
        for (let i = 0; i < row; i++) {
            if (grid[i][col] === 'Q') return false; 
        }
        for (let j = 0; j < col; j++) {
            if (grid[row][j] === 'Q') return false; 
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (grid[i][j] === 'Q') return false; 
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j >= 0; i--, j++) {
            if (grid[i][j] === 'Q') return false; 
        }
        return true;
    }
};