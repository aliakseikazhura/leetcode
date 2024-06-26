// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.


// Medium
// https://leetcode.com/problems/merge-intervals/ 


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const result = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = intervals[i];
        while (i + 1 < intervals.length && end >= intervals[i + 1][0]) {
            end = Math.max(end, intervals[i + 1][1]);
            i++;
        }
        result.push([start, end]);
    }

    return result;
};



let merge = function (intervals) {
    if (intervals.length == 0) return [];
    if (intervals.length == 1) return intervals;
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    let result = [intervals[0]];
  
    for (let interval of intervals) {
      let recentInterval = result[result.length - 1];
      if (recentInterval[1] >= interval[0]) {
        recentInterval[1] = Math.max(recentInterval[1], interval[1]);
      } else {
        result.push(interval);
      }
    }
    return result;
  };
  