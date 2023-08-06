// Write a function argumentsLength that returns the count of arguments passed

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// Easy
// https://leetcode.com/problems/return-length-of-arguments-passed/


/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return arguments.length;
   };
   
   /**
    * argumentsLength(1, 2, 3); // 3
    */