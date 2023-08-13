// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Input: s = "hello"
// Output: "holle"


// Input: s = "leetcode"
// Output: "leotcede"


// Easy
// https://leetcode.com/problems/reverse-vowels-of-a-string/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length < 2) return s;

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let left = 0, right = s.length - 1;    
    s = s.split('');

    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
        if (!vowels.includes(s[left])) {
            left++;
        }
        if (!vowels.includes(s[right])) {
            right--;
        }
    }

    return s.join('');
};
