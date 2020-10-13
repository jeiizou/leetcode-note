/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let maxLevel = 1;
    if (!root) {
        return 0;
    }

    const readTree = (node, level) => {
        if (node === null) return;
        if (level > maxLevel) {
            maxLevel = level;
        }
        if (node.left) {
            readTree(node.left, level + 1);
        }
        if (node.right) {
            readTree(node.right, level + 1);
        }
    }

    readTree(root, maxLevel);
    return maxLevel;
};
// @lc code=end

