/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    // if()

    let na = a.split('');
    let nb = b.split('');
    if (a.length < b.length) {
        na = b.split('');
        nb = a.split('');
    }
    // na >= nb
    let carry = 0;
    for (let i = 1; i <= na.length; i++) {
        let nb_sit = 0;
        if (nb[nb.length - i]) {
            nb_sit = +nb[nb.length - i];
        }
        let na_sit = 0;
        if (na[na.length - i]) {
            na_sit = +na[na.length - i];
        }
        let sum = na_sit + nb_sit + carry;
        if (sum > 1) {
            carry = 1;
        } else {
            carry = 0;
        }
        na[na.length - i] = sum % 2 + "";
    }
    na = na.join('');
    if (carry === 1) {
        na = '1' + na;
    }
    return na;
};
// @lc code=end

// console.log(addBinary('11', '1'));
// console.log(addBinary('1010', '1011'));
// console.log(addBinary('1111', '0001'));
// console.log(addBinary('0', '0'));
// console.log(addBinary('111', ''));