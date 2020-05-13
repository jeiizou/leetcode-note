/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) {
        return x;
    }

    let C = x, x0 = x;
    while (true) {
        let xi = 0.5 * (x0 + C / x0);
        if (Math.abs(x0 - xi) < 1e-7) {
            break;
        }
        x0 = xi;
    }
    return Number.parseInt(x0);
};
// @lc code=end

// let res = mySqrt(9);
// console.log(res);