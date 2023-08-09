// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]


// Input: n = 1
// Output: ["()"]


// Medium
// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    dfs(n, n, "")
    return result;

    function dfs(open, close, current) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open > 0) dfs( open - 1, close, current + "(")
        if (close > open) dfs( open, close - 1, current + ")")
    }
};




/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    dfs(0, 0, "")
    return result;

    function dfs(open, close, current) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (open < n) dfs(open + 1, close, current + "(");
        if (close < open) dfs(open, close + 1, current + ")");
    }
};