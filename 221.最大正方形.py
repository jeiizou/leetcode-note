#
# @lc app=leetcode.cn id=221 lang=python3
#
# [221] 最大正方形
#
from typing import List

# @lc code=start


class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m, n = len(matrix), len(matrix[0])
        if m < 1 or n < 1:
            return 0
        dp = [[0 for i in range(n)] for j in range(m)]
        max_level = 0
        for i in range(m):
            for j in range(n):
                if i == 0 or j == 0:
                    dp[i][j] = int(matrix[i][j])
                elif matrix[i][j] == '1':
                    a1 = dp[i-1][j]
                    a2 = dp[i][j-1]
                    a3 = dp[i-1][j-1]
                    if a1 == a2 and a1 == a3:
                        dp[i][j] = a1 + 1
                    else:
                        dp[i][j] = min(a1, a2, a3) + 1
                if dp[i][j] > max_level:
                    max_level = dp[i][j]
        return max_level * max_level


# @lc code=end

solution = Solution()
ans = solution.maximalSquare([
    # ["1", "0", "1", "0", "0"],
    # ["1", "0", "1", "1", "1"],
    # ["1", "1", "1", "1", "1"],
    # ["1", "0", "0", "1", "0"]
    # ["0", "1"], ["1", "0"]
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["0", "0", "1", "1", "1"]
])

print(ans)
