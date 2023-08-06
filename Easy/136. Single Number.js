// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Easy
// https://leetcode.com/problems/single-number/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const curEl = nums[i];
      if (!map[curEl]) {
          map[curEl] = 1;
      } else {
          map[curEl] = map[curEl] + 1;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      const curEl = nums[i];
      if (map[curEl] === 1) return curEl;
    }
  }


var singleNumber = function(nums) {
    // Initialize the unique number...
    let uniqNum = 0;
    // TRaverse all elements through the loop...
    for (let idx = 0; idx < nums.length; idx++) {
        // Concept of XOR...
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;       // Return the unique number...
};