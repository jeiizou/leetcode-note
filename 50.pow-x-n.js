/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let N = n;
    if (n < 0) {
        x = 1 / x;
        N = -N
    };
    return fastPow(x, N);
};

function fastPow(x, n) {
    if (n === 0) {
        return 1;
    }

    let half = fastPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}
// @lc code=end

// let res = myPow(2, 2);
// console.log(res);

