// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Input: nums = [1,1,2]
// Output: [1]

// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        const value = nums[index];

        if (value > 0) {
            nums[index] = -nums[index];
        } else {
            result.push(Math.abs(nums[i]))
        }
    }
    return result;
};