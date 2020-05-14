/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 4) {
        return n;
    }
    let stepArr = [1, 2, 3];
    for (let i = 3; i < n; i++) {
        stepArr[i] = stepArr[i - 1] + stepArr[i - 2];
    }
    return stepArr[n - 1];
};
// @lc code=end

console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
console.log(climbStairs(7));

