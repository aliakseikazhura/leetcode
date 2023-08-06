// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Follow up: Could you minimize the total number of operations done?


// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]

// Easy
// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let valIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            valIndex++;
            continue;
        }
        valIndex = getNextNum(nums, valIndex);
        nums[i] = nums[valIndex];
        nums[valIndex] = 0;
    }

    return nums;
};

function getNextNum(nums, left) {
    while (left < nums.length) {
        if (nums[left] !== 0) return left;
        left++;
    }
    return nums.length - 1;
}


moveZeroes = function(nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
    
};
