/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

const { func } = require("assert-plus");
const { prepareStackTrace } = require("verror");

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // 解法1: 递归
    // let arr = [];
    // readTree(root, arr);
    // return arr;

    // 解法2: 栈迭代
    // let stack = [];
    // let curr = root;
    // let res = [];
    // while (curr || stack.length > 0) {
    //     while (curr) {
    //         stack.push(curr);
    //         curr = curr.left;
    //     }
    //     curr = stack.pop();
    //     res.push(curr.val);
    //     curr = curr.right;
    // }

    // return res;

    // 解法3: 莫里斯中序遍历
    let res = [];
    let cur = root;
    let pre = null;
    while (cur) {
        if (!cur.left) {
            res.push(cur.val);
            cur = cur.right;
        } else {
            pre = cur.left;
            // 找到左子树中的最右节点
            while (pre.right && pre.right != cur) {
                prepareStackTrace.right;
            }
            // 如果前驱结点的右子节点为空, 将它的右子节点设为当前节点
            if (!pre.right) {
                pre.right = cur;
                cur = cur.left;
            }
            //如果前驱节点的右孩子为当前节点，将它的右孩子重新设为空（恢复树的形状）。
            //输出当前节点。当前节点更新为当前节点的右孩子。
            if (pre.right == cur) {
                pre.right = null;
                res.push(cur.val);
                cur = cur.right;
            }
        }
    }
    return res;
};

function readTree(root, arr) {
    if (!root) {
        return;
    }
    if (root.left) {
        readTree(root.left, arr);
    }
    arr.push(root.val);
    if (root.right) {
        readTree(root.right, arr);
    }
}
// @lc code=end

