// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Input: root = [1]
// Output: ["1"]


// Easy
// https://leetcode.com/problems/binary-tree-paths/description/

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let finalRes = [];
    dfs(root, []);

    return finalRes;

    function dfs(root, tempRes) {
      if (!root) return;
      tempRes.push(root.val);

      if (!root.left && !root.right) {
        const res = tempRes.join("->");
        finalRes.push(res);
        tempRes.pop();
        return;
      }

      dfs(root.left, tempRes);
      dfs(root.right, tempRes);
      tempRes.pop();
    }
};


// ["30->15->10->5","30->15->10->12","30->15->17","30->50"]


var binaryTreePaths = function(root) {
    let paths = [];
    
    function dfsTraversal(root, cur) {
        if (!root) return;
        if (!root.left && !root.right) {
            paths.push(cur + root.val);
            return;
        }
        dfsTraversal(root.left, cur + root.val + "->");
        dfsTraversal(root.right, cur + root.val + "->");
    }
    
    dfsTraversal(root, "");
    return paths;
    // Time Complexity: O(N), we always visit all nodes
    // Space Complexity: O(H) or O(N), height can be at most N (in case of a skewed tree)
};
