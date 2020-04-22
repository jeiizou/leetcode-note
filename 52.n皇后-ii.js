/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let matrix = createMatrix(n);
    let solutions = [];
    findSolution(matrix, solutions);
    return solutions.length;
};

function findSolution(matrix, solutions, q_index = 0) {
    let n = matrix.length;
    if (q_index === n) {
        solutions.push(matrix.map((i) => {
            return i.join('');
        }));
        return;
    }
    for (let i = 0; i < n; i++) {
        if (matrix[q_index][i] === 0) {
            let new_matrix = copyMatrix(matrix);
            // 可放置皇后
            let res = setQueen(new_matrix, q_index, i);
            if (res) {
                findSolution(new_matrix, solutions, q_index + 1);
            }
        }
    }
}

function copyMatrix(m) {
    let n_m = [];
    for (let i = 0; i < m.length; i++) {
        n_m[i] = [];
        for (let j = 0; j < m[i].length; j++) {
            n_m[i][j] = m[i][j];
        }
    }
    return n_m;
}

function createMatrix(n, ceil = 0) {
    return (new Array(n)).fill('').map((i) => { return new Array(n).fill(ceil) })
}

function setQueen(matrix, n, m) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === n || j === m || i + j === m + n || i - j === n - m) {
                // 遇到其他皇后
                if (matrix[i][j] === 'Q') {
                    return false;
                }

                if (i === n && j === m) {
                    matrix[i][j] = 'Q';
                } else {
                    matrix[i][j] = '.';
                }
            }
        }
    }
    return true;
}
// @lc code=end

