/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
    let res = [];

    let nodes = [];

    if (root) {
        nodes.push(root);
    }

    let nextNodes = [];
    let temp = [];
    while (nodes.length > 0) {
        let curNode = nodes.shift();
        temp.push(curNode.val);

        if (curNode.left) {
            nextNodes.push(curNode.left);
        }

        if (curNode.right) {
            nextNodes.push(curNode.right);
        }

        if (nodes.length === 0) {
            nodes = nextNodes;
            nextNodes = [];
            res.unshift(temp);
            temp = [];
        }
    }

    return res;
};
// @lc code=end

const tree = {
    val: 3,
    left: {
        val: 9,
    },
    right: {
        val: 20,
        left: {
            val: 15,
        },
        right: {
            val: 7,
        },
    },
};

let res = levelOrderBottom(tree);
console.log(res);
