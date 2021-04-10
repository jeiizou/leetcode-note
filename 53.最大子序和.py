#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子序和
#

from typing import List
# @lc code=start


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 1:
            return 0

        dp = [0] * n
        dp[0] = nums[0]
        max_v = dp[0]
        for i in range(1, n):
            dp[i] = nums[i]
            if dp[i - 1] > 0:
                dp[i] += dp[i-1]
            max_v = max(max_v, dp[i])
        return max_v


# @lc code=end

solution = Solution()
ans = solution.maxSubArray([8, -19, 5, -4, 20])
print(ans)
