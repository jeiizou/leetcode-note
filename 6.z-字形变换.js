/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let x = 0;
    let res_maxtrix = [];
    let line = 1;

    if (numRows < 2) {
        return s;
    }

    while (s[x]) {
        let site = (line - 1) % (numRows - 1);
        if (site === 0) {
            let row = [];
            for (let i = 0; i < numRows; i++) {
                if (s[x]) {
                    row.push(s[x]);
                    x++;
                } else {
                    break;
                }
            }
            res_maxtrix.push(row);
        } else {
            let row = new Array(numRows).fill(null);
            row[numRows - site - 1] = s[x];
            x++;
            res_maxtrix.push(row);
        }
        line++;
    }

    let res_str = '';
    for (let i = 0; i < numRows; i++) {
        let str = res_maxtrix.map(row => row[i]).join('');
        res_str += str;
    }
    return res_str;
};

// convert('LEETCODEISHIRING', 3);
