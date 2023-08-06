// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,null,3]
// Output: [1,3]


// Medium
// https://leetcode.com/problems/binary-tree-right-side-view/


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
var rightSideView = function(root) {
    if (!root) return [];
    const res = [];
    dfs(root, 0, res);

    return res;
};

function dfs(root, level, res) {

    if (res.length === level) {
        res.push(root.val);
    }

    if (root.right !== null) {
        dfs(root.right, level + 1, res);
    }
    if (root.left !== null) {
        dfs(root.left, level + 1, res);
    }

    return res;
}



var rightSideView = function(root) {
    const result = [];
    const queue = [];
    
    if (root === null) return result;
    
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let n = queue.shift();
            if (i === size - 1) result.push(n.val);
            if (n.left !== null) queue.push(n.left);
            if (n.right !== null) queue.push(n.right);
        }
    }
    
    return result;
};