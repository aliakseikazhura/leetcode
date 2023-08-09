// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Input: n = 1
// Output: [["Q"]]


// Hard
// https://leetcode.com/problems/n-queens/

/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function(n) {
    let grid = new Array(n).fill([]).map(() => new Array(n).fill("."));
    const result = [];
    solve(0);
    return result;

    function solve(row) {
        if (row === n) {
            result.push([...grid].map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {        
            const isValid = isValidBoard(row, col);
            if (isValid) {
                grid[row][col] = 'Q';
                solve(row + 1);
                grid[row][col] = '.';
            }
        }
    }

    function isValidBoard(row, col) {
        //check for spots above on this column
        for(let i = 0; i < row; i++) {
            if(grid[i][col] === "Q") return false;
        }
        //check for up left
        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(grid[i][j] === "Q") return false;
        }
        //check for up right
        for(let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
            if(grid[i][j] === "Q") return false;
        }
        return true;
    }
};
