// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.


// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.


// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.

// Medium
// https://leetcode.com/problems/combinations/description/


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    dfs([], 1);
    return result;

    function dfs(current, index) {
        if (current.length === k) {
            result.push(current);
            return;
        }
        for (let i = index; i <= n; i++) {
            dfs([...current, i], i + 1);
        }
    }
};