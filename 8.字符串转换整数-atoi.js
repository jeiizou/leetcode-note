/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let x = 0;
    while (str[x] === ' ') {
        x++;
    }
    let num = '';
    if (str[x] === '+' || str[x] === '-') {
        num += str[x];
        x++;
    }

    let length = 0;
    while (str[x] && str[x].match(/[0-9]/)) {
        num += str[x];
        length++;
        x++;
    }
    if (length === 0) {
        return 0;
    }
    num = num - 0;
    if (num > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (num < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    }

    return num;
};

// console.log(myAtoi('-91283472332'));
