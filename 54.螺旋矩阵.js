/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length < 1) {
        return [];
    }
    
    if (matrix.length < 2) {
        return matrix[0];
    }

    let res = [];
    getOrder(matrix, res);
    return res;
};

function getOrder(matrix, res) {
    res.push(...matrix[0]);
    matrix = matrix.slice(1);
    if (matrix.length > 0 && matrix[0].length > 0) {
        matrix = rotate(matrix);
        getOrder(matrix, res);
    }
}

var rotate = function (matrix) {
    let newMatrix = new Array(matrix[0].length).fill('').map(() => []);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[matrix[i].length - j - 1][i] = matrix[i][j];
        }
    }
    return newMatrix;
};
// @lc code=end

let res = spiralOrder([]);
console.log(res);
