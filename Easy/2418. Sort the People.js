// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.


// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.


// Easy
// https://leetcode.com/problems/sort-the-people/


/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = {};
    let result = [];
    
    for (let i = 0; i < heights.length; i++) {
        map[heights[i]] = names[i];
    }
    heights.sort((a, b) => b - a);

    for (let i = 0; i < heights.length; i++) {
        result.push(map[heights[i]]);
    }

    return result;
};


// ------------------------------------

var sortPeople = (names, heights) =>
  names
    .map((c, i) => [c, heights[i]])
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0]);