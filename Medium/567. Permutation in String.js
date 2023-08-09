// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").


// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Medium 
// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const needFind = {};
    let needLen = s1.length;

    for (let i = 0; i < s1.length; i++) {
        needFind[s1[i]] = (needFind[s1[i]] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    while (right < s2.length) {
        if (needFind[s2[right]] > 0) {
            needLen--;
        }
        needFind[s2[right]] = needFind[s2[right]] - 1;

        if (needLen === 0) return true;

        if (s1.length === right - left + 1) {
            const remEl = s2[left];
            if (needFind[remEl] >= 0) {
                needLen++;
            }
            needFind[remEl] = needFind[remEl] + 1;
            left++;
        }

        right++;
    }

    return false;
};

