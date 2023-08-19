// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Medium
// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let mins = 0;
    while(!isValid()) {
        replace();
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    rotCell(i, j);
                }
            }
        }
        mins++;
    }
    return isGridRotten() ? mins : -1;


    function isValid() {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1 && 
                    (isRot(i + 1, j) || isRot(i - 1, j) ||
                    isRot(i, j + 1) || isRot(i, j - 1))) {
                    return false;
                }
            }
        }
        return true;
    }
    function isRot(row, col) {
        return grid[row]?.[col] === 2 || grid[row]?.[col] === 3;
    }
    function replace() {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 3) {
                    grid[i][j] = 2;
                }
            }
        }
    }
    function isGridRotten() {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    return false;
                }
            }
        }
        return true;
    }
    function rotCell(row, col) {
        if (grid[row + 1]?.[col] === 1) grid[row + 1][col] = 3;
        if (grid[row - 1]?.[col] === 1) grid[row - 1][col] = 3;
        if (grid[row]?.[col + 1] === 1) grid[row][col + 1] = 3;
        if (grid[row]?.[col - 1] === 1) grid[row][col - 1] = 3;
    }
};




// --------------------------------------------------------

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let fresh = 0;
    const queue = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (grid[i][j] === 2) queue.push([i, j]);
        if (grid[i][j] === 1) fresh++;
      }
    }
    let minute = 0;
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const [x, y] = queue.shift();
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
          grid[x - 1][y] = 2;
          fresh--;
          queue.push([x - 1, y]);
        }
        if (x + 1 < height && grid[x + 1][y] === 1) {
          grid[x + 1][y] = 2;
          fresh--;
          queue.push([x + 1, y]);
        }
        if (y - 1 >= 0 && grid[x][y - 1] === 1) {
          grid[x][y - 1] = 2;
          fresh--;
          queue.push([x, y - 1]);
        }
        if (y + 1 < width && grid[x][y + 1] === 1) {
          grid[x][y + 1] = 2;
          fresh--;
          queue.push([x, y + 1]);
        }
      }
      if (queue.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
  };
