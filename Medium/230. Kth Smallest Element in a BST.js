// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.


// Input: root = [3,1,4,null,2], k = 1
// Output: 1


// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Medium
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/


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
var kthSmallest = function(root, k) {
    const result = [];
    dfs(root, result);
    return result[k - 1];

    function dfs(node) {
        if (!node) return;
        
        dfs(node.left, result);
        result.push(node.val);
        dfs(node.right, result);
    }
};

