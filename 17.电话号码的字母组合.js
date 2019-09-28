/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

var dic = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};

var letterCombinations = function(digits) {
    let res = [];
    getBranch(digits, '', res);
    return res;
};

function getBranch(str, path, arr) {
    if (str[0]) {
        for (let i = 0; i < dic[str[0]].length; i++) {
            const char = dic[str[0]][i];
            getBranch(str.slice(1), path + char, arr);
        }
    } else {
        if (path) {
            arr.push(path);
        }
        return;
    }
}
