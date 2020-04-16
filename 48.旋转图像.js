/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let rank = matrix.length - 1;
    let center = rank / 2;
    console.log(center);
    for (let i = 0; i <= center; i++) {
        for (let j = 0; j <= center; j++) {
            let vi = i - center;
            let vj = j - center;
            /**
             * -+  ++
             * --  +-
             */
            let temp = matrix[vi + center][vj + center];
            console.log(temp, vi + center, vj + center);
            matrix[vi + center][vj + center] = matrix[-vj + center][vi + center];
            console.log(-vj + center, i + center);
            matrix[-vj + center][vi + center] = matrix[-vi + center][-vj + center];
            matrix[-vi + center][-vj + center] = matrix[vj + center][vi + center];
            matrix[vj + center][vi + center] = temp;
        }

    }
    return;
};
// @lc code=end

let matrix =
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]

rotate(matrix);
console.log(matrix)