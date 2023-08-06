// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Input: root = [2,1,3]
// Output: true


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Medium
// https://leetcode.com/problems/validate-binary-search-tree/


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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return dfs(root, -Infinity, +Infinity);
};

function dfs(root, minValue, maxValue) {
    if (!root) return true;

    if (root.val >= maxValue || root.val <= minValue) return false;
    console.log(root.val)
    return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue);
}