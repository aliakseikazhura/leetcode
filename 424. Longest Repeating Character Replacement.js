// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achive this answer too.

// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var characterReplacement = function(s, k) {
    var map = {};
    // Initialize largestCount, maxlen & beg pointer...
    let largestCount = 0, start = 0, maxlen = 0;
    // Traverse all characters through the loop...
    for(let end = 0; end < s.length; end++){
        const c = s[end]
        map[c] = (map[c] || 0) + 1
        // Get the largest count of a single, unique character in the current window...
        largestCount = Math.max(largestCount, map[c])
        // We are allowed to have at most k replacements in the window...
        // So, if max character frequency + distance between start and end is greater than k...
        // this means we have considered changing more than k charactres. So time to shrink window...
        // Then there are more characters in the window than we can replace, and we need to shrink the window...
        if(end - start + 1 - largestCount > k){     // The main equation is: end - start + 1 - largestCount...
            map[s[start]] -= 1
            start += 1
        }
        // Get the maximum length of repeating character...
        maxlen = Math.max(maxlen, end - start + 1);     // end - beg + 1 = size of the current window
    }
    return maxlen;      // Return the maximum length of repeating character...
};
