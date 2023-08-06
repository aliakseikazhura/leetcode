// Given an integer array nums, return the length of the longest strictly increasing 

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Medium
// https://leetcode.com/problems/longest-increasing-subsequence/


/**
 * @param {number[]} nums
 * @return {number}
 */

const binarySearch = (array, currVal) => {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        if(array[mid] < currVal) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    return left;
}

lengthOfLIS = function(nums) {
    const temp = [nums[0]];
    for(let i = 1; i < nums.length; i++) {
        const currVal = nums[i]; 
        if(currVal > temp[temp.length-1]) {
            temp.push(currVal);
        } else {
            const j = binarySearch(temp, currVal);
            temp[j] = currVal;
        }
    }
    return temp.length;
};