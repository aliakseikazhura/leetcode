// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].


// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].


// Easy
// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let extra = 0;
    let result = [];
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + extra;
        extra = 0;

        if (i === digits.length - 1) sum = sum + 1;
        if (sum >= 10) {
            result.unshift(sum % 10);
            extra = 1;
        } else {
            result.unshift(sum);
        }
    }

    if (extra) result.unshift(extra);

    return result;
};


var plusOne = function(digits) {
   for(let i = digits.length - 1; i >= 0; i--){
       if(digits[i] < 9){
           digits[i]++;
           return digits;
       }
       digits[i] = 0;
   }
   digits.unshift(1);
   return digits;
};