// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.


// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]


// Input: s = "3z4"
// Output: ["3z4","3Z4"]


// Medium
// https://leetcode.com/problems/letter-case-permutation/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = [];
    dfs("", 0);
    return res;

    function dfs(current, i) {
        if (i === s.length) {
            res.push(current);
            return;
        }

        if (isNum(s[i])) {
            dfs(current + s[i], i + 1);
        } else {
            dfs(current + s[i].toUpperCase(), i + 1);
            dfs(current + s[i].toLowerCase(), i + 1);
        }
    }
};

function isNum(value) {
    return /\d/.test(value);
}