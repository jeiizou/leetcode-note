/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let resValues = [];
    let flag = true;

    const readTree = (curNodes) => {
        let values = [];
        let nodes = [];
        curNodes.forEach(node => {
            if (!node) return;
            if (flag) {
                values.push(node.val);
            } else {
                values.unshift(node.val);
            }
            if (node.left) {
                nodes.push(node.left);
            }

            if (node.right) {
                nodes.push(node.right);
            }
        });

        flag = !flag;

        if (values.length) {
            resValues.push(values);
        }

        if (curNodes.length) {
            readTree(nodes);
        }
    }

    readTree([root]);
    return resValues;
};
// @lc code=end

