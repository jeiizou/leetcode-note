/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let i = 0;
    let j = 0;
    while (i < matrix.length && j < matrix[0].length) {
        console.log(i, j);
        if (matrix[i][j] === target) {
            return true;
        }

        if (matrix[i][j] > target) {
            return false;
        }

        if (matrix[i + 1] && target >= matrix[i + 1][j]) {
            i++;
        } else {
            j++;
        }
    }

    return false;
};
// @lc code=end

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
], 34));
