// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true


// Easy
// https://leetcode.com/problems/subtree-of-another-tree/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function(node1, node2) {
    
    if (!node1 && !node2) return true;
    if ((!node1 && node2) || (node1 && !node2)) return false;
    if (node1.val !== node2.val) return false;
    
    return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
};