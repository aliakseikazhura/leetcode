// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Easy
// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
 * @return {number[]}
 */
var inorderTraversal = function(root, result = []) {
    if (!root) return result;

    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
    return result;
};