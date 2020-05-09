/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

    if (digits.length < 1) {
        return [];
    }

    let ins = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + ins;
        if (digits[i] >= 10) {
            digits[i] = digits[i] - 10;
            ins = 1;
        } else {
            return digits;
        }
    }

    if (ins === 1) {
        digits.unshift(1);

    }

    return digits;
};
// @lc code=end

console.log(plusOne([1, 2, 9]));
