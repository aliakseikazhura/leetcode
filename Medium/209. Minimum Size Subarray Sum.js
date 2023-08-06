// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.


// Input: target = 4, nums = [1,4,4]
// Output: 1

// Medium 
// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let rigthPoint = 0;
    let leftPoint = 0;
    let sum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log("sum = ", sum)
        sum+= nums[rigthPoint];
        while (sum >= target) {
            const len = rigthPoint - leftPoint + 1;
            if (result === 0 || len < result) result = len;
            sum-=nums[leftPoint];
            leftPoint++;
        }
        rigthPoint++;
        console.log("leftPoint = ", leftPoint)
        console.log("rigthPoint = ", rigthPoint)
    }
    return result;
};