// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced binary search tree.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

// Easy 
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    let mid = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[mid]);

    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));

    return node;
};