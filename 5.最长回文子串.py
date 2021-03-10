#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # 特例
        slen = len(s)
        if slen < 2:
            return s
        maxLen = 1
        begin = 0
        dp = [[-1 for i in range(slen)] for j in range(slen)]
        charArr = list(s)
        for i in range(0, slen):
            dp[i][i] = 0
        for j in range(1, slen):
            for i in range(0, j):
                if charArr[i] != charArr[j]:
                    dp[i][j] = False
                else:
                    if j-i < 3:
                        dp[i][j] = True
                    else:
                        dp[i][j] = dp[i+1][j-1]
                if dp[i][j] and j - i + 1 > maxLen:
                    maxLen = j - i + 1
                    begin = i
        return s[begin:begin + maxLen]
# @lc code=end


solution = Solution()
res = solution.longestPalindrome('babad')
print(res)
