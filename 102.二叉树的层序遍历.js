/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    let resValues = [];

    const readTree = (curNodes) => {
        let values = [];
        let nodes = [];
        curNodes.forEach(node => {
            if (!node) return;
            values.push(node.val);

            if (node.left) {
                nodes.push(node.left);
            }

            if (node.right) {
                nodes.push(node.right);
            }
        });

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

