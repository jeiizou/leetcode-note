#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] 最长有效括号
#

# @lc code=start
class Solution:
    def longestValidParentheses(self, s: str) -> int:
        maxans = 0
        dp = [0] * len(s)
        for i in range(1, len(s)):
            if s[i] == ')':
                if s[i-1] == '(':
                    dp[i] = (dp[i-2] if i >= 2 else 0) + 2
                elif i - dp[i-1] > 0 and s[i-dp[i-1]-1] == '(':
                    dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2]
                                         if (i - dp[i - 1]) >= 2 else 0) + 2
                maxans = max(maxans, dp[i])
        return maxans
# @lc code=end

solution = Solution()
res =solution.longestValidParentheses(')(')
print(res)