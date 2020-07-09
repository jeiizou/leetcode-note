/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    let n_arr = Array.from(Array(n), (v, k) => k + 1);
    let res_arr = [];

    let geneNode = (cur, arr, resLength) => {

        if (!arr.length) {
            if (resLength === 0) {
                res_arr.push()
            }
            return null;
        }

        let right_arr = [];
        let left_arr = [];
        for (let i = 0; i < arr.length; i++) {
            const node = arr[i];
            if (node < cur) {
                left_arr.push(node)
            } else {
                right_arr.push(node)
            }
        }

        let leftTreeArr = []
        for (let i = 0; i < left_arr.length; i++) {
            const leftNode = left_arr[i];
            let leftTree = geneNode(leftNode, [...left_arr.slice(0, i), left_arr.slice(i + 1)], resLength - 1);
            leftTreeArr.push(leftTree);
        }

        let rightTreeArr = [];
        for (let i = 0; i < right_arr.length; i++) {
            const rightNode = right_arr[i];
            let rightTree = geneNode(rightNode, [...right_arr.slice(0, i), right_arr.slice(i + 1)], resLength - 1);
            rightTreeArr.puhs(rightTree)
        }
    }
};
// @lc code=end


console.log(generateTrees(3))
