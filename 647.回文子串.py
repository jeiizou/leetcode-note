#
# @lc app=leetcode.cn id=647 lang=python3
#
# [647] 回文子串
#

# @lc code=start
class Solution:
    def countSubstrings(self, s: str) -> int:
        slen = len(s)
        if slen < 2:
            return 1
        dp = [[-1 for i in range(slen)] for j in range(slen)]
        charArr = list(s)
        ret = 0
        for i in range(0, slen):
            dp[i][i] = 0
            ret += 1
        for j in range(1, slen):
            for i in range(0, j):
                if charArr[i] != charArr[j]:
                    dp[i][j] = -1
                else:
                    if j - i < 3:
                        dp[i][j] = 0
                    else:
                        dp[i][j] = dp[i+1][j-1]
                    if dp[i][j] == 0:
                        ret += 1
        return ret

# @lc code=end


solution = Solution()

print(solution.countSubstrings('a'))
