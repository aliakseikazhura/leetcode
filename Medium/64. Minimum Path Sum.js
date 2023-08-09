// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.


// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

// Medium
// https://leetcode.com/problems/minimum-path-sum/description/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let dp = new Array(rows).fill(0).map((v) => new Array(cols).fill(0));
  
    dp[0][0] = grid[0][0];
    
    for (let i = 1; i < rows; i++) {
      dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    for (let j = 1; j < cols; j++) {
      dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
  
    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  
    return dp[rows - 1][cols - 1];
  };