#
# @lc app=leetcode.cn id=718 lang=python3
#
# [718] 最长重复子数组
#

from typing import List
# @lc code=start


class Solution:
    def findLength(self, A: List[int], B: List[int]) -> int:
        n, m = len(A), len(B)
        dp = [[0] * (m + 1) for _ in range(n + 1)]
        ans = 0
        for i in range(n - 1, -1, -1):
            for j in range(m - 1, -1, -1):
                dp[i][j] = dp[i + 1][j + 1] + 1 if A[i] == B[j] else 0
                ans = max(ans, dp[i][j])
        return ans
# @lc code=end


solution = Solution()
res = solution.findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0])
print(res)
