/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n === 0) {
        return 0
    }

    let nArr = Array.from(Array(n), (v, k) => k + 1);

    let nMap = {};

    let geneNode = (arr) => {
        let arrKey = arr.sort((a, b) => a - b).join(',');
        if (nMap[arrKey]) {
            return nMap[arrKey];
        }

        if (!arr.length) {
            return 1;
        }

        let resTreeCount = 0;
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

            // 获得所有左子树和右子树的组合模式 数量
            let curTreeArr = geneNode(leftArr) * geneNode(rightArr)

            // 增加
            resTreeCount += curTreeArr;
        }

        nMap[arrKey] = resTreeCount;
        return resTreeCount;
    }


    return geneNode(nArr);
};
// @lc code=end

console.log(numTrees(14));