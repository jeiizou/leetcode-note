/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */
const { readTree } = require('./util/util');

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

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
    if (n === 0) {
        return []
    }

    let nArr = Array.from(Array(n), (v, k) => k + 1);

    let geneNode = (arr) => {
        if (!arr.length) {
            return [null];
        }

        let resTreeArr = [];
        for (let i = 0; i < arr.length; i++) {
            const curVal = arr[i];

            // 获取应该放在左边的数字和应该放在右边的数字
            let rightArr = [];
            let leftArr = [];
            for (let i = 0; i < arr.length; i++) {
                const node = arr[i];
                if (node < curVal) {
                    leftArr.push(node)
                } else if (node > curVal) {
                    rightArr.push(node)
                }
            }

            // 获取所有左子树和右子树
            let leftTreeArr = geneNode(leftArr);
            let rightTreeArr = geneNode(rightArr);

            // 获得所有左子树和右子树的组合模式
            let curTreeArr = []
            for (let i = 0; i < leftTreeArr.length; i++) {
                const leftTree = leftTreeArr[i];
                for (let j = 0; j < rightTreeArr.length; j++) {
                    const rightTree = rightTreeArr[j];
                    curTreeArr.push(new TreeNode(curVal, leftTree, rightTree))
                }
            }
            // 压平
            resTreeArr.push(...curTreeArr);
        }

        return resTreeArr;
    }

    return geneNode(nArr);
};
// @lc code=end


// let resArr = generateTrees(3);
// for (let i = 0; i < resArr.length; i++) {
//     const tree = resArr[i];
//     // console.log(tree);
//     console.log(readTree(tree));
// }
