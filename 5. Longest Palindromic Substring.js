// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


// Input: s = "cbbd"
// Output: "bb"


// Medium
// https://leetcode.com/problems/longest-palindromic-substring/

let maxLen, maxStart, maxEnd;
var longestPalindrome = function(s) {
    maxLen = 0, maxStart = 0, maxEnd = 0;
    for (let i = 0; i < s.length; i++) {
        expandFromCenter(s, i, i);
        expandFromCenter(s, i, i + 1);
    }
    return s.substring(maxStart, maxEnd + 1);
};


function expandFromCenter(s, start, end) {
    while(start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    if (maxLen < end - start - 1) {
        maxLen = end - start - 1;
        maxStart = start + 1;
        maxEnd = end - 1;
    }
}

