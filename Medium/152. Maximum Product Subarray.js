// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.



// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.


// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


// Medium 
// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curMax = 1;
    let curMin = 1;
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        const tempMax = curMax;
        curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i]);
        curMin = Math.min(tempMax * nums[i], curMin * nums[i], nums[i]);

        res = Math.max(curMax, res);
    }

    return res;
};
