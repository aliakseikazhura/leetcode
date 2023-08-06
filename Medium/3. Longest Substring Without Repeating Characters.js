// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

//  Input: s = "abcabcbb"
//  Output: 3
//  Explanation: The answer is "abc", with the length of 3.
 

//  Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Medium
// https://leetcode.com/problems/longest-substring-without-repeating-characters/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let set = new Set();

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start])
            start++;
        }
        set.add(s[end]);
        max = Math.max(max, end - start + 1);
    }
    
    return max;
};
