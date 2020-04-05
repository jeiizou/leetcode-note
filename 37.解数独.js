/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const STAND = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const SUB = 3;
const M_INDEX_MAX = 8;

var solveSudoku = function (board) {
    let res = [];
    getSolution(board, 0, 0, res);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = res[0][i][j];
        }
    }
};

function getSolution(board, i = 0, j = 0, res = []) {
    // 已经填写数字, 跳过
    if (board[i][j] !== '.') {
        if (i === M_INDEX_MAX && j === M_INDEX_MAX) {
            res.push(board);
        } else if (i === M_INDEX_MAX && j < M_INDEX_MAX) {
            getSolution(board, 0, j + 1, res);
        } else if (i < M_INDEX_MAX) {
            getSolution(board, i + 1, j, res);
        }
        return;
    }

    let resValues = getCeilResValue(board, i, j);
    if (!resValues.length) {
        // 没有符合条件的数字, 匹配失败
        return false;
    }

    for (let index = 0; index < resValues.length; index++) {
        const value = resValues[index];
        let cur_board = copyMatrix(board);
        cur_board[i][j] = value;

        if (i === M_INDEX_MAX && j == M_INDEX_MAX) {
            res.push(cur_board);
            return;
        } else if (i === M_INDEX_MAX && j < M_INDEX_MAX) {
            getSolution(cur_board, 0, j + 1, res);
        } else if (i < M_INDEX_MAX) {
            getSolution(cur_board, i + 1, j, res);
        }
    }
    return;
}

function getCeilResValue(board, i, j) {
    if (board[i][j] !== '.') {
        return [];
    }

    let res = Array.from(STAND);
    for (let k = 0; k < board[i].length; k++) {
        const element = board[i][k];
        if (element !== '.') {
            let index = res.indexOf(element);
            if (index !== -1) {
                res.splice(index, 1);
            }
        }
    }
    for (let v = 0; v < board.length; v++) {
        const element = board[v][j];
        if (element !== '.') {
            let index = res.indexOf(element);
            if (index !== -1) {
                res.splice(index, 1);
            }
        }
    }

    let xi = parseInt(i / SUB);
    let yi = parseInt(j / SUB);

    let subArrs = [
        board[xi * SUB][yi * SUB],
        board[xi * SUB + 1][yi * SUB],
        board[xi * SUB + 2][yi * SUB],

        board[xi * SUB][yi * SUB + 1],
        board[xi * SUB + 1][yi * SUB + 1],
        board[xi * SUB + 2][yi * SUB + 1],

        board[xi * SUB][yi * SUB + 2],
        board[xi * SUB + 1][yi * SUB + 2],
        board[xi * SUB + 2][yi * SUB + 2],
    ]

    for (let w = 0; w < subArrs.length; w++) {
        const element = subArrs[w];
        if (element !== '.') {
            let index = res.indexOf(element);
            if (index !== -1) {
                res.splice(index, 1);
            }
        }
    }

    return res;
}

function copyMatrix(matrix) {
    let re = [];
    for (let i = 0; i < matrix.length; i++) {
        let [...arr1] = matrix[i];
        re.push(arr1);
    }
    return re;
}


// const EXAMPLE_MATRIX = [
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]
// ]

// let res = solveSudoku(EXAMPLE_MATRIX);
// console.log(res);
// @lc code=end

