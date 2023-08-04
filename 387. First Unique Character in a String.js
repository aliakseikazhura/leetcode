// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Input: s = "leetcode"
// Output: 0

// Input: s = "aabb"
// Output: -1


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        const curEl = s[i];
        if (Number.isInteger(map[curEl])) {
            map[curEl] = -1;
        } else {
            map[curEl] = i;
        }
    }

    const minIndex = Object.values(map)
        .sort((a, b) => a - b)
        .filter((i) => i !== -1)[0];

    return Number.isInteger(minIndex) ? minIndex : -1;
};


var firstUniqChar = function(s) {
    for (let idx = 0; idx < s.length; idx++){
        // If same...
        if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
            // return the index of that unique character
            return idx
        } else {
            return -1       // If no character appeared exactly once...
        }
    }
};

var firstUniqChar = function(s) {
    let map = {}
    
    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }
        
    return -1
};