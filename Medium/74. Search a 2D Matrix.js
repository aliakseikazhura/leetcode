// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// Medium
// https://leetcode.com/problems/search-a-2d-matrix/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
  
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
  }
  
  