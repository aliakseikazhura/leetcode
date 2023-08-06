// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Input: nums = [3,2,3]
// Output: 3


// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Easy
// https://leetcode.com/problems/majority-element/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let vote = 0;
    let curEl = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (curEl === nums[i]) {
            vote++;
        } else if (vote > 0){
            vote--;
        } else {
            curEl = nums[i];
            vote++;
        }
    }
    return curEl;
};