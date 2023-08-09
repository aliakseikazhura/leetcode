// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.


// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


//  Hard
//  https://leetcode.com/problems/sliding-window-maximum/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // Decreasing monotonic queue so the maximum value is at the front
    const dequeue = []; 
    const output = [];
    /*
     * The goal is to maintain a decreasing monotonic queue and register 
     * max value as the window shifts.
     * 
     * nums = [1,3,-1,-3,5,3,6,7], k = 3
     * 
     * i        queue           output
     * 0        [1]             []
     * 1        [3]             []
     * 2        [3, -1]         [3]
     * 3        [3, -1, -3]     [3, 3]
     * 4        [5]             [3, 3, 5]
     * 5        [5, 3]          [3, 3, 5, 5]
     * 6        [6]             [3, 3, 5, 5, 6]
     * 7        [7]             [3, 3, 5, 5, 6, 7]
     */
    for (let i = 0; i < nums.length; i++) {
        // add the number at the right position queue
        while (nums[i] > dequeue[dequeue.length - 1]) {
            dequeue.pop();
        }
        dequeue.push(nums[i]);
        /**
         * once the window fully overlaps the array, we can start register
         * the maximum values in each iteration. 
         */
        if (i >= k - 1) {
            output.push(dequeue[0]);
            // remove maximum value when it's moving outside of the window
            if (nums[i - k + 1] === dequeue[0]) {
                dequeue.shift();
            }
        }
    }
    
    return output;
};

var maxSlidingWindow = function(nums, k) {
    const window = [], out = [];
    const findIndex = target => {
        // Using Binary Search to find the index
        let low = 0, high = window.length - 1;
        while(low <= high) {
            const mid = Math.floor((low + high) / 2);
            if(window[mid] < target) low = mid + 1;
            else if (window[mid] > target) high = mid - 1;
            else return mid;
        }
        return low;
    }
    const insertSorted = (num) => { // Inserts a number to the window and keeps the window sorted
        window.splice(findIndex(num), 0, num);
    }
    for(let i = 0; i < nums.length; i++) {
        insertSorted(nums[i]);
        if(window.length < k) continue; // Insert all first k Elements
        if(window.length == k) out.push(window[window.length - 1]) // Now that window has all k elements, we add max to output while window is moving
        else {
            window.splice(findIndex(nums[i - k]), 1); // Remove the number that's exiting the window
            out.push(window[window.length - 1]);
        }
    }
    return out;
};