// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.


// Input: n = 1
// Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

// Input: n = 2
// Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
// Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.


// https://leetcode.com/problems/count-sorted-vowel-strings/


/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const symbols = ["a", "e", "i", "o", "u"];
    let count = 0;
    dfs("", 0);
    return count;

    function dfs(current, index) {
        if (current.length === n) {
            count++;
            return;
        }

        for (let i = index; i < symbols.length; i++) {
            dfs(current + symbols[i], i);
        }
    }
};



/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  // Since the string has to be ordered, it means for every addition of a character, each vowel can add all combinations from itself to the last vowel
  // In the example below, when `n` is 2, vowel `a` can add all combinations (from `n = 1` result) from `a` to `u`, vowel `e` can add all combinations from `e` to `u`, and so on
  // When `n` is 3, again vowel `a` can add all combinations (from `n = 2` result) from `a` to `u`, and so on
  
  // When n is 1, result is [a, e, i, o, u]
  // When n is 2, result is
  //  [aa, ae, ai, ao, au,
  //    ee, ei, eo, eu,
  //    ii, io, iu
  //    oo, ou,
  //    uu]
  // When n is 3, result is
  //  [aaa, aae, aai, aao, aau, aee, aei, aeo, aeu, aii, aio, aiu, aoo, aou, auu
  //    eee, eei, eeo, eeu, eii, eio, eiu, eoo, eou, euu
  //    iii, iio, iiu, ioo, iou,
  //    ooo, oou, ouu
  //    uuu]
  
  // But instead of list all the possible vowel combinations, we can simplified this with calculation
  // In the example below, when `n` is 1, each vowel can only combined itself so total possible combination is 5
  // When `n` is 2
  //    vowel `a` can combined itself with starting from vowel `a` in `n = 1` result (1 + 1 + 1 + 1 + 1 = 5)
  //    vowel `e` can combined itself with any combinations starting from vowel `e` in `n = 1` result (1 + 1 + 1 + 1 = 4)
  // When `n` is 3
  //    vowel `a` can combined itself with starting from vowel `a` in `n = 2` result (5 + 4 + 3 + 2 + 1 = 15)
  //    vowel `e` can combined itself with any combinations starting from vowel `e` in `n = 2` result (4 + 3 + 2 + 1 = 10)
  // And so on
  
  // n    a   e   i   o   u
  // 1    1   1   1   1   1 = 5
  // 2    5   4   3   2   1 = 15
  // 3    15  10  6   3   1 = 35
  // 4    35  20  10  4   1 = 70
  // 5    70  35  15  5   1 = 126
  // 6    126 56  21  6   1 = 210
  
  // So this problem can be solved with matrix or array, by looping through `n` and count possible combination for each vowel by adding all previous possible combinations from `v` (for vowel) to 5 (for 5 vowels)
  
  let count = Array(5).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let v = 0; v < count.length; v++) {
      count[v] = count.slice(v).reduce((sum, vow) => sum + vow, 0);
    }
  }
  
  return count.reduce((sum, vow) => sum + vow, 0);
};