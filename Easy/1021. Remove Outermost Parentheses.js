// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.


// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation: 
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".


// Easy
// https://leetcode.com/problems/remove-outermost-parentheses/


/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let openCount = 0;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            if (openCount) {
                result += char;
            }
            openCount++;
        } else {
            openCount--;
            if (openCount) {
                result += char;
            }
        }

    }

    return result;
};