/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let res1 = checkMatrix(board);
    let res2 = checkMatrix(revertMatrix(board));
    let res3 = checkMatrix(divideMatrix(board));
    return res1 && res2 && res3;
};


function checkNumberLine(arrs) {
    let stand = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < arrs.length; i++) {
        const number = arrs[i];
        if (number !== ".") {
            let numberIndex = stand.indexOf(number);
            if (numberIndex === -1) {
                return false
            } else {
                stand.splice(numberIndex, 1);
            }
        }
    }
    return true;
}

function checkMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const line = matrix[i];
        if (!checkNumberLine(line)) {
            return false;
        }
    }

    return true;
}

function createMatrix(length) {
    let matrix = new Array(length).fill(0);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(length).fill(0)
    };
    return matrix;
}

function revertMatrix(matrix) {
    let newMatrix = createMatrix(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    return newMatrix;
}

function divideMatrix(matrix) {
    let newMatrix = createMatrix(matrix.length);
    let sub = 3;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let xi = parseInt(i / sub);
            let yi = parseInt(j / sub);
            let new_x = xi * sub + yi;
            let new_y = (i % sub) * sub + (j % sub);
            newMatrix[new_x][new_y] = matrix[i][j];
        }
    }
    return newMatrix;
}

// @lc code=end

