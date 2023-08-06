// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


// Follow up:
// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Medium
// https://leetcode.com/problems/set-matrix-zeroes/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowZero = false;
    let colZero = false;
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) colZero = true;
    }
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) rowZero = true;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (colZero) {
        for (let i = 0; i < rows; i++) matrix[i][0] = 0;
    }
    if (rowZero) {
        for (let j = 0; j < cols; j++) matrix[0][j] = 0;
    }
};