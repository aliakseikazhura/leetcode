// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10


// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Easy
// https://leetcode.com/problems/counting-bits/description/


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        let binary = i.toString(2);
        binary = binary.replaceAll('0', '');
        res.push(binary.length);
    }
    return res;
};


/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = [0];
    for(let i = 1; i <= num; i++) {
        const half = i >> 1;
        const odd = i & 1;
        res[i] = res[half] + odd;
    }
    return res;
};