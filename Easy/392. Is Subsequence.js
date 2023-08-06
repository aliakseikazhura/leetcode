// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?


// Input: s = "abc", t = "ahbgdc"
// Output: true


// Input: s = "axc", t = "ahbgdc"
// Output: false


// Easy
// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let point = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[point]) point++;
    }

    return point === s.length;
};