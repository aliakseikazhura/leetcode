// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.


// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.


// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].

// Medium
// https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let start = 0;
    let maxLen = 0;
    let map = new Map();

    for (let end = 0; end < fruits.length; end++) {
        const currEl = fruits[end];
        map.set(currEl, (map.get(currEl) || 0) + 1);

        while (map.size > 2) {
            const leftEl = fruits[start];
            if (map.get(leftEl) > 1) {
                map.set(leftEl, map.get(leftEl) - 1);
            } else {
                map.delete(leftEl);
            }
            start++;
        }
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};

totalFruit([0,2,5,1,1,6,7])