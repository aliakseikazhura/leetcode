// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

//Easy
// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//     const resP = getTreeValues(p, []);
//     const resQ = getTreeValues(q, []);

//     for (let i = 0; i < resP.length; i++) {
//         if (resP[i] !== resQ[i]) return false;
//     }
//     return true;
// };

// function getTreeValues(node, values) {
//     values.push(node?.val);

//     if (node === null) return values;

//     getTreeValues(node.left, values);
//     getTreeValues(node.right, values);
//     return values;
// }


var isSameTree = function(node1, node2) {
    
    if (!node1 && !node2) return true;
    if ((!node1 && node2) || (node1 && !node2)) return false;
    if (node1.val !== node2.val) return false;
    
    return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
};