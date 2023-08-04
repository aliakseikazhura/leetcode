// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.


// Input: nums = [1,2,3,4], k = 5
// Output: 2
// Explanation: Starting with nums = [1,2,3,4]:
// - Remove numbers 1 and 4, then nums = [2,3]
// - Remove numbers 2 and 3, then nums = []
// There are no more pairs that sum up to 5, hence a total of 2 operations.


// Input: nums = [3,1,3,4,3], k = 6
// Output: 1
// Explanation: Starting with nums = [3,1,3,4,3]:
// - Remove the first two 3's, then nums = [1,4,3]
// There are no more pairs that sum up to 6, hence a total of 1 operation.


// Medium 
// https://leetcode.com/problems/max-number-of-k-sum-pairs/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let count = 0;
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = k - nums[i];
      if (!map.has(diff)) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        continue;
      };
      if (map.get(diff) === 1) {
        map.delete(diff);
      } else {
        map.set(diff, map.get(diff) - 1);
      }
      count++;
    }

    return count;
};