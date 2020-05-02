/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1))
};

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// @lc code=end

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));