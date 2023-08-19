// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.


// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.


// Medium 
// https://leetcode.com/problems/surrounded-regions/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 'O') {
            helper(i, 0);
        }
        if (board[i][board[0].length - 1] === 'O') {
            helper(i, board[0].length - 1);
        }
    }
    for (let j = 0; j < board[0].length; j++) {
        if (board[0][j] === 'O') {
            helper(0, j);
        }
        if (board[board.length - 1][j] === 'O') {
            helper(board.length - 1, j);
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '2') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }

    return board;

    function helper(row, col) {
        if (row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length || 
            board[row][col] !== 'O') return false;

        board[row][col] = '2';

        helper(row + 1, col);
        helper(row - 1, col);
        helper(row, col + 1);
        helper(row, col - 1);
    }
};