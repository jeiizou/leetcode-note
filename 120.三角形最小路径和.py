#
# @lc app=leetcode.cn id=120 lang=python3
#
# [120] 三角形最小路径和
#

from typing import List
# @lc code=start


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        if n < 1:
            return 0

        dp = [0] * n
        for i in range(n-1, -1, -1):
            m = len(triangle[i])
            if i == n - 1:
                dp[i] = triangle[i]
            else:
                dp[i] = [0] * m
                for j in range(0, m):
                    dp[i][j] = triangle[i][j] + min(dp[i+1][j], dp[i+1][j + 1])
        return dp[0][0]


# @lc code=end

solution = Solution()
ans = solution.minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
    # [1]
])
print(ans)
