// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.



// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]


// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Medium
// https://leetcode.com/problems/daily-temperatures/


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        const curEl = temperatures[i];
        while (stack.length && curEl > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index]= i - index;
        }
        stack.push(i);
    }
    return result;
};