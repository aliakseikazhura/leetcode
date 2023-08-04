// Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

// Return the number of nice sub-arrays.


// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There is no odd numbers in the array.

// Medium 
// https://leetcode.com/problems/count-number-of-nice-subarrays/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let start = 0;
    let totalCount = 0;
    let countOdds = 0;
    let count = 0;

    for (let end = 0; end < nums.length; end++) {
        if (isOdd(nums[end])) {
            countOdds++;
            count = 0;
        }

        while (countOdds >= k) {
            if (isOdd(nums[start])){
                countOdds--;
            }
            count++;
            start++;
        }

        totalCount+= count;
    }

    return totalCount;
};


function isOdd(num) { return num % 2}

