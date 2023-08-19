// Given an integer array nums and an integer k, return true 
// if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


// Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false


// Easy
// https://leetcode.com/problems/contains-duplicate-ii/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== null) {
            if (Math.abs(i - map[nums[i]]) <= k) return true;
        }
        map[nums[i]] = i;
    }

    return false;
};