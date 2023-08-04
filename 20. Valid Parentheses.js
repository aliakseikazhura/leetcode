// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true


// Input: s = "(]"
// Output: false

// Easy
// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = s.split('');
    const map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    if (brackets.length < 2) return false;

    for (let i = 0; i < brackets.length; i++) {
        if (isOpenBracket(brackets[i])) {
            stack.push(brackets[i]);
        } else {
            if (map[stack.pop()] !== brackets[i]) return false
        }
    }

    return stack.length === 0;
};

function isOpenBracket (bracket) {
    return ["[", "(", "{"].includes(bracket);
}