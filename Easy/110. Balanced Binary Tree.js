// Given a binary tree, determine if it is height-balanced

// Input: root = [3,9,20,null,null,15,7]
// Output: true


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Easy 
// https://leetcode.com/problems/balanced-binary-tree/


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
var isBalanced = function(root) {
    if (root === null) return true;
    if (dfs(root) === -1) return false;

    return true;
};

function dfs(root) {
    if (root === null) return 0;

    let countLeft = dfs(root.left);
    let countRight = dfs(root.right);
    
    if (Math.abs(countLeft - countRight) > 1) {
        return -1;
    }
    if (countLeft === -1 || countRight === -1) {
        return -1;
    }

    return Math.max(countLeft, countRight) + 1;
}
