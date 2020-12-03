/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
 * @return {boolean}
 */
var isBalanced = function (root) {

    let banlanceflag = true;

    const getHeight = (node, h) => {
        if (!node) {
            return h;
        }

        let leftHeight = getHeight(node.left, h + 1);
        let rightHeight = getHeight(node.right, h + 1);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            banlanceflag = false;
            return h;
        }

        return Math.max(leftHeight, rightHeight)
    }

    getHeight(root, 1);

    return banlanceflag;

};
// @lc code=end

