// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.


// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Medium 
// https://leetcode.com/problems/max-consecutive-ones-iii/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start = 0;
    let end = 0;
    let max = 0;
    let replaceAvailable = k;

    for (let i = 0; i < nums.length; i++) {
        const curEl = nums[i];
        if (curEl === 0) {
            replaceAvailable--;
        } 
        while (replaceAvailable < 0) {
            if (nums[start] === 0) {
                replaceAvailable++;
            }
            start++;
        }
        end++;
        max = Math.max(max, end - start);
    }

    return max;
};