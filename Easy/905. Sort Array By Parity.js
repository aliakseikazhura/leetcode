// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.


// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Easy
// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const isOdd = isOddNum(nums[i]);
        isOdd ? result.push(nums[i]) : result.unshift(nums[i]);
    }
    return result;

    function isOddNum(num) {
        return num % 2 !== 0;
    }
};

// ---------------------

var sortArrayByParity = function(nums) {
    let oddIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[i], nums[oddIdx]] = [nums[oddIdx], nums[i]];
            oddIdx++;
        }
    }
    return nums;
};