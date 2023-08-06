// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.



// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".


// Easy
// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getNextChar(s, i);
        j = getNextChar(t, j);
        if (i < 0 && j < 0) return true;
        if (i < 0 || j < 0) return false;
        if (s[i] !== t[j]) return false;

        i--;
        j--;
    }

    return true;
};

function getNextChar(s, i) {
    let skip = 0;
    while (i >= 0) {
        if (s[i] === "#") {
            skip++;
        } else if (skip > 0){
            skip--;
        } else {
            break;
        }
        i--;
    }
    return i;
}
