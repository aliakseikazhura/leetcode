// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Medium
// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    const set = new Set();
    nums.forEach((value) => set.add(value))

    for (value of set) {
        if (set.has(value - 1)) continue;
        let count = 0;
        while (set.has(value++)){
            count++;
        }
        max = Math.max(max, count);
    }
    return max;
};