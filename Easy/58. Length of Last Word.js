// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.


// Easy
// https://leetcode.com/problems/length-of-last-word/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const parts = s.trim().split(/\s+/);
    return parts[parts.length - 1].length;
};