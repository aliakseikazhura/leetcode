// Given the root of a binary tree, return the sum of values of its deepest leaves.


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15


// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

// Medium
// https://leetcode.com/problems/deepest-leaves-sum/

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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if (!root) return 0;
  
    let result = {};
    dfs(root, 0, result);
  
    const keys = Object.keys(result);
    return result[keys[keys.length - 1]];
  };
  
  
  function dfs (root, level, result) {
    if (!root) return 0;
  
    result[level] = (result[level] || 0) + root.val;
    level++;
    if (root.left) dfs(root.left, level, result);
    if (root.right) dfs(root.right, level, result);
    
  }