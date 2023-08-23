// You are given the root of a binary tree and a positive integer k.

// The level sum in the tree is the sum of the values of the nodes that are on the same level.

// Return the kth largest level sum in the tree (not necessarily distinct). If there are fewer than k levels in the tree, return -1.

// Note that two nodes are on the same level if they have the same distance from the root.


// Input: root = [5,8,9,2,1,3,7,4,6], k = 2
// Output: 13
// Explanation: The level sums are the following:
// - Level 1: 5.
// - Level 2: 8 + 9 = 17.
// - Level 3: 2 + 1 + 3 + 7 = 13.
// - Level 4: 4 + 6 = 10.
// The 2nd largest level sum is 13.


// Medium
// https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
    const result = [];
    const stack = [root];

    while (stack.length) {
        let sum = 0;
        const len = stack.length;
        for (let i = 0; i < len; i++) {
            const node = stack.shift();
            sum = sum + node.val;
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
        result.push(sum);
    }
    result.sort((a, b) => b - a);

    return result.length >= k ? result[k - 1] : -1;
};
