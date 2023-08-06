// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
//   Output: 1

//   Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
//   Output: 3


// Medium
// https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                solve(grid, i, j);
                count++;
            }
        }
    }

    return count;
};

function solve(grid, i, j) {
    grid[i][j] = "5";

    if (grid?.[i]?.[j + 1] === "1") solve(grid, i, j + 1)
    if (grid?.[i]?.[j - 1] === "1") solve(grid, i, j - 1)

    if (grid?.[i + 1]?.[j] === "1") solve(grid, i + 1, j)
    if (grid?.[i - 1]?.[j] === "1") solve(grid, i - 1, j)
}
