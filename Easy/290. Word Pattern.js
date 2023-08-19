// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.


// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Easy
// https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const digPattern = [];
    const digS = [];
    const words = s.split(' ');
    if (words.length !== pattern.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        digPattern.push(pattern.indexOf(pattern[i]));
        digS.push(words.indexOf(words[i]));
    }

    for (let i = 0; i < digPattern.length; i++) {
        if (digPattern[i] !== digS[i]) return false;
    }

    return true;
};