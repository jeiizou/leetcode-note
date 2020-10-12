/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    if (!root) {
        return true;
    }

    const compare = (p, q) => {
        if (!p && !q) {
            return true;
        } else if ((p && !q) || (!p && q)) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        return compare(p.left, q.right) && compare(p.right, q.left)
    }

    if (!root.left && !root.right) {
        return true
    }

    if (root.left && root.right) {
        return compare(root.left, root.right);
    }

    return false;
};
// @lc code=end

