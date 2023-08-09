// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.


// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]


// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

// Medium
// https://leetcode.com/problems/combination-sum-ii/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    const result = [];
    candidates.sort();

    dfs([], 0, candidates);

    return result;


    function dfs(current, sum, rest) {
        if (sum === target) result.push(current);
        if (sum > target) return;

        for (let i = 0; i < rest.length; i++) {
            if (rest[i] === rest[i - 1]) continue;
            dfs([...current,  rest[i]], sum + rest[i], [...rest.slice(i + 1)]);
        }
    }
};



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort();

    dfs([], 0, 0);

    return result;

    function dfs(current, sum, index) {
        if (sum === target) result.push(current);
        if (sum > target) return;

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] === candidates[i - 1] && index !== i) continue;
            dfs([...current,  candidates[i]], sum + candidates[i], i + 1);
        }
    }
};
