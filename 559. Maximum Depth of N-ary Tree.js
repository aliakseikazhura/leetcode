// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5

// Easy
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;

    let max = 0;
    if (root.children.length) {
      root.children.forEach((el) => {
        max = Math.max(max, maxDepth(el));
      })
    }
    return max + 1;
};


var maxDepth = function(root) {
    if(!root) return 0;
    // Note: it is not advised to use array as queue
    let queue = [], depthCount = 0;
    queue.push(root);
    
    while(queue.length > 0){
        let len = queue.length;
        
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            for(let child of node.children) queue.push(child);
        }
        depthCount++;
    }
    return depthCount;
}
