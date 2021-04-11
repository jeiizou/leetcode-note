#
# @lc app=leetcode.cn id=354 lang=python3
#
# [354] 俄罗斯套娃信封问题
#

from typing import List
# @lc code=start


class Solution:
    def maxEnvelopes(self, envelopes: List[List[int]]) -> int:
        n = len(envelopes)
        if n < 1:
            return 0
        envelopes.sort(key=lambda x: (x[0], -x[1]))
        dp = [1] * n
        for i in range(n):
            for j in range(i):
                if envelopes[j][1] < envelopes[i][1]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)


# @lc code=end
solution = Solution()
ans = solution.maxEnvelopes(
    [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 5], [6, 7], [7, 8]])
print(ans)
