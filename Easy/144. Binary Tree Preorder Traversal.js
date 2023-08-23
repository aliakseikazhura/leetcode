// Given the root of a binary tree, return the preorder traversal of its nodes' values.


// Input: root = [1,null,2,3]
// Output: [1,2,3]


// Easy
// https://leetcode.com/problems/binary-tree-preorder-traversal/


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
var preorderTraversal = function(root) {
    const result = [];
    helper(root);
    return result;

    function helper(node) {
        if (!node) return false;
        result.push(node.val);

        helper(node.left);
        helper(node.right);
    }
};

