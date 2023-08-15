// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included 
// in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Follow up: Could you find an algorithm that runs in O(m + n) time?


// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.


// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Hard
// https://leetcode.com/problems/minimum-window-substring/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = (map[t[i]] || 0) + 1;
    }
    let uniqueLen = Object.keys(map).length;

    let res = "";
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        map[s[right]] = (map[s[right]] || 0) - 1;
        if (map[s[right]] === 0) {
            uniqueLen--;
        }

        while (uniqueLen === 0) {
            if (!res || res.length > right - left + 1) {
                res = s.slice(left, right + 1);
            }
            const leftChar = s[left];
            if (map[leftChar] === 0) {
                uniqueLen++;
            }
            map[leftChar] = map[leftChar] + 1;
            left++;
        }
        
    }
    return res;
};