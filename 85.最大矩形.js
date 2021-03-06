/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maxArea = (heights) => {
    const stack = [];
    let ans = 0;
    heights.unshift(0);
    heights.push(0);
    for (let i = 0; i < heights.length; ++i) {
        while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
            const currentHeight = stack.pop();
            const right = i - 1, left = stack[stack.length - 1] + 1;
            ans = Math.max(ans, (right - left + 1) * heights[currentHeight])
        }
        stack.push(i);
    }
    return ans;
}
var maximalRectangle = function (matrix) {
    let res = 0;
    if (!matrix.length) return res;
    const dp = [];
    for (let i = 0; i < matrix[0].length; ++i) {
        dp.push(0);
    }
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            dp[j] = matrix[i][j] === '1' ? dp[j] + 1 : 0;
        }
        res = Math.max(res, maxArea(dp.slice()));
    }
    return res;
};
// @lc code=end

