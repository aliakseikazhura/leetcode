// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.


// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Input: nums = [0]
// Output: [[],[0]]

// Medium
// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [[]];
    nums.sort()
    dfs([], 0);    
    return result;

    function dfs(path, index) {
        for (let i = index; i < nums.length; i++) {
            if (nums[i - 1] === nums[i] && i > index) continue;
            path.push(nums[i]);
            result.push([...path]);

            dfs(path, i + 1);
            
            path.pop();
        }
    }
};