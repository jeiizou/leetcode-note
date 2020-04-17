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

    if (rank < 1) {
        return;
    }

    let center = rank / 2;
    for (let i = 0; i <= center; i++) {
        for (let j = 0; j < center; j++) {
            let vi = i - center;
            let vj = j - center;
            /**
             * -+  ++
             * --  +-
             */
            let temp = matrix[vi + center][vj + center];
            // console.log(vi + center, vj + center);

            matrix[vi + center][vj + center] = matrix[-vj + center][vi + center];
            // console.log(-vj + center, vi + center);

            matrix[-vj + center][vi + center] = matrix[-vi + center][-vj + center];
            // console.log(-vi + center, -vj + center);

            matrix[-vi + center][-vj + center] = matrix[vj + center][-vi + center];
            // console.log(vj + center, -vi + center);

            matrix[vj + center][-vi + center] = temp;
        }

    }
    return;
};
// @lc code=end
