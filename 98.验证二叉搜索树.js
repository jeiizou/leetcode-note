/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    const validBST = (root, min, max) => {
        if (root === null) return true;
        if (root.val <= min || root.val >= max) return false;
        return validBST(root.left, min, root.val) && validBST(root.right, root.val, max);
    }

    return validBST(root, -Infinity, +Infinity);
};
// @lc code=end

