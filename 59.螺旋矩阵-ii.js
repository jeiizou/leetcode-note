/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

    if (n <= 0) {
        return [];
    }

    if (n === 1) {
        return [[1]];
    }

    let matrix = createMatrix(n);
    let array = createNatureArr(n * n);

    let res = [];
    // console.log(matrix)
    getOrder(matrix, res);
    for (let i = 0; i < res.length; i++) {
        let site = res[i];
        matrix[site[0]][site[1]] = array[i]
    }

    return matrix;
};

function getOrder(matrix, res) {
    res.push(...matrix[0]);
    matrix = matrix.slice(1);
    if (matrix.length > 0 && matrix[0].length > 0) {
        matrix = rotate(matrix);
        getOrder(matrix, res);
    }
}

function createNatureArr(length) {
    return new Array(length).fill('').map((i, index) => index + 1);
}

function rotate(matrix) {
    let newMatrix = new Array(matrix[0].length).fill('').map(() => []);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[matrix[i].length - j - 1][i] = matrix[i][j];
        }
    }
    return newMatrix;
};

function createMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            matrix[i][j] = [i, j]
        }
    }
    return matrix;
}
// @lc code=end

console.log(generateMatrix(1));

