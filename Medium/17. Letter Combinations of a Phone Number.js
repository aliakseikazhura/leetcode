// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Input: digits = "2"
// Output: ["a","b","c"]


// Medium
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }
    const result = [];
    if (!digits.length) return [];
    dfs("", 0);
    return result;

    function dfs(current, curDigIndex) {
        if (current.length === digits.length) {
            result.push(current);
            return;
        }
        const curEls = map[digits[curDigIndex]];
        for (let i = 0; i < curEls.length; i++) {
            dfs(current + curEls[i], curDigIndex + 1);
        }
    }
};