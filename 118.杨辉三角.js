/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) {
        return [[1]]
    }
    if (numRows < 1) {
        return []
    }
    const generateNextRow = (row) => {
        let nextRow = [1];
        for (let i = 0; i < row.length - 1; i++) {
            const num = row[i];
            let count = num + (row[i + 1] ? row[i + 1] : 0);
            nextRow.push(count);
        }
        nextRow.push(1);
        return nextRow;
    }

    let arr = [];
    let row = [];
    for (let i = 1; i <= numRows; i++) {
        if (i === 1) {
            row = [1]
        } else {
            row = generateNextRow(row)
        }
        arr.push(row);
    }
    return arr;
};
// @lc code=end

// console.log(generate(5));