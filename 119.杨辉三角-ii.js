/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
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

    if (rowIndex === 0) {
        return [1]
    } else {
        return generateNextRow(getRow(rowIndex - 1));
    }
};
// @lc code=end

