#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

from typing import List
# @lc code=start


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n < 1:
            return 0
        max_V = min_v = prices[0]
        ans = 0
        for i in range(1, n):
            if prices[i] < min_v:
                min_v = prices[i]
                max_V = prices[i]
            elif prices[i] > max_V:
                value = prices[i] - min_v
                ans = max(value, ans)
                max_V = prices[i]
        return ans
# @lc code=end

solution = Solution()
# 5
print(solution.maxProfit([7, 1, 5, 3, 6, 4])) 
# 0
print(solution.maxProfit([7, 6, 4, 3, 1]))
# 1
print(solution.maxProfit([2, 1, 2, 0, 1]))
# 2
print(solution.maxProfit([2, 4, 1]))
