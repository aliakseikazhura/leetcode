// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.


// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.


// Medium
// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Subarray size (right - left + 1) gives the number of new sub-arrays generated upon adding a new element to the subarray.

// For example, 
// What is the total number of sub-arrays of [10,4,2,1]?

// start: []
// add 10: [10] -> +1 -> [10]
// add 4: [10,4] -> +2 -> [4], [10,4]
// add 2: [10,4,2] -> +3 -> [2], [4,2], [10,4,2]
// add 1: [10,4,2,1] -> +4 -> [1], [2,1], [4,2,1], [10,4,2,1]

var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let start = 0;
    let count = 0;
    let prod = 1;

    for (let end = 0; end < nums.length; end++) {
        prod = prod * nums[end];
        while (prod >= k) {
            prod = prod / nums[start];
            start++;
        }
        count += end - start + 1;
    }
    return count;
};