// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Medium
// https://leetcode.com/problems/rotate-image/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = i; j < cols; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols / 2; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][cols - 1 - j];
            matrix[i][cols - 1 - j] = temp;
        }
    }

    return matrix;
};