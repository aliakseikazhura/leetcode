// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


// Follow up: Could you use search pruning to make your solution faster with a larger board?

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Medium
// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0]) {
                let isSolved = solve(board, word, i , j);
                if (isSolved) return true;
            }
        }
    }
    return false;


    function solve(board, word, i , j) {
        if (!word.length) return true;
        if (i >= rows || j >= cols || i < 0 || j < 0 || board[i][j] !== word[0]) return false;

        const temp = board[i][j];
        board[i][j] = '_';

        const isMatched = solve(board, word.slice(1), i + 1, j) 
            || solve(board, word.slice(1), i - 1, j) 
            || solve(board, word.slice(1), i, j + 1)
            || solve(board, word.slice(1), i, j - 1);
        
        board[i][j] = temp;
        return isMatched;
    }
};
