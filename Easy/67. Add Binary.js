// Given two binary strings a and b, return their sum as a binary string.


// Input: a = "11", b = "1"
// Output: "100"


// Input: a = "1010", b = "1011"
// Output: "10101"


// Easy
// https://leetcode.com/problems/add-binary/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = [];
    let extra = 0;
    let maxLen = a.length >= b.length ? a : b;
    let minLen = a.length < b.length ? a : b;
    let len = maxLen.length - minLen.length;
    
    for (let i = 0; i < len; i++) minLen = "0" + minLen;
    for (let i = maxLen.length - 1; i >= 0; i--) {
        const sum = +maxLen[i] + +minLen[i] + extra;
        const dig = sum > 1 ? sum - 2 : sum;
        extra = sum > 1 ? 1 : 0;
        res.push(dig);
    }
    if (extra) res.push(1);

    let i = res.length - 1;
    while (res.length > 1) {
        if (res[i] !== 0) break;
        res.shift();
        i--;
    }
    return res.reverse().join('');
};