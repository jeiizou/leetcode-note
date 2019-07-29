/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.45%)
 * Total Accepted:    80.5K
 * Total Submissions: 255.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    function isOverFlow(x) {
        if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
            return true;
        } else {
            return false;
        }
    }

    if (isOverFlow(x)) {
        return 0;
    }

    var x_arr = (x + '').split('');
    if (x_arr[0] === '-') {
        x_arr.shift();
        x_arr.reverse();
        x_arr.unshift('-');
    } else {
        x_arr.reverse();
    }

    var res = parseInt(x_arr.join(''));

    if (isOverFlow(res)) {
        return 0;
    }

    return res;
};

// let res = reverse(-12457896);
// console.log(res);
