/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 1) {
        return 0
    }
    let min = Infinity;
    let index = 0;
    let maxValue = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            index = i;
        }
        if (prices[i] >= min && i > index) {
            maxValue = Math.max(prices[i] - min, maxValue);
        }
    }
    return maxValue;
};
// @lc code=end