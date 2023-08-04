// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let rigth = matrix[0].length - 1;

    const result = [];
    while (top <= bottom && left <= rigth) {

        for (let i = left; i <= rigth; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][rigth]);
        }
        rigth--;

        if (top <= bottom){
            for (let i = rigth; i >= left; i--) { 
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= rigth){
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
};

