// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// https://leetcode.com/problems/longest-common-prefix/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
        }
        if (!prefix) return prefix;
    }

    return prefix;
};