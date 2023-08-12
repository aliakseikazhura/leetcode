// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.


// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Medium
// https://leetcode.com/problems/insert-interval/


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for (let i = 0; i < intervals.length; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};



// O(n), O(n)
var insert = function (intervals, newInterval) {
    let [start, end] = newInterval;
    let left = [];
    let right = [];
    
    for (const interval of intervals) {
      const [first, last] = interval;
      
      // current interval is smaller than newInterval
      if (last < start) left.push(interval);
      
      // current interval is larger than newInterval
      else if (first > end) right.push(interval);
      
      // there is a overlap
      else {
        start = Math.min(start, first);
        end = Math.max(end, last);
      }
    }
    
    return [...left, [start, end], ...right]; 
  };
  