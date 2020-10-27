/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }
    let map = new Map();
    const dfs = (index, status, k) => {
        let key = [index, status, k].join(',');
        if (map.has(key)) {
            return map.get(key);
        }

        if (index === prices.length || k === 2) {
            return 0;
        }
        let a = 0, b = 0, c = 0;
        // 保持不动
        a = dfs(index + 1, status, k);
        if (status === 1) {
            // 递归处理卖掉的情况
            b = dfs(index + 1, 0, k + 1) + prices[index];
        } else {
            // 递归处理买入的情况
            c = dfs(index + 1, 1, k) - prices[index];
        }
        map.set(key, Math.max(a, Math.max(b, c)));
        // 最终结果就是是变量中最大的那个
        return map.get(key);
    }

    return dfs(0, 0, 0);
};
// @lc code=end

// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));