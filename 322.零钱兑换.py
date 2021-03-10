#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] 零钱兑换
#
import sys
from typing import List

# @lc code=start


class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # table
        f = [sys.maxsize] * ( amount + 1 )
        f[0] = 0
        for i in range(1, amount + 1):
            for coin in coins:
                # 边界条件判断
                if i >= coin and f[i - coin] != sys.maxsize:
                    f[i] = min(f[i - coin] + 1, f[i])
        if f[amount] == sys.maxsize:
            return -1
        return f[amount]

# @lc code=end


solution = Solution()
res = solution.coinChange([1, 2, 5], 11)
print(res)
