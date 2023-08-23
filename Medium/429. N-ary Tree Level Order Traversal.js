// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).


// Medium
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    const result = [];
    const stack = [root];

    while (stack.length) {
        const tempRes = [];
        const len = stack.length;
        for (let i = 0; i < len; i++) {
            const node = stack.shift();
            tempRes.push(node.val);

            for (let child of node.children) stack.push(child);
        }
        result.push(tempRes);
    }

    return result;
};