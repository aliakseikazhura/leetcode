// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Medium
// https://leetcode.com/problems/3sum-closest/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minDif = Infinity;
    let finalSum = 0;
    nums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++ ) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const curSum = nums[i] + nums[left] + nums[right];
            const curDif = Math.abs(curSum - target);

            if (curDif < minDif) {
                minDif = curDif;
                finalSum = curSum;
            }

            if (curSum > target) { 
                right--;
            } else {
                left++;
            }
        }
    }

    return finalSum
};
