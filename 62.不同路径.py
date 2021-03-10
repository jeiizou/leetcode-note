#
# @lc app=leetcode.cn id=62 lang=python3
#
# [62] 不同路径
#

# @lc code=start
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        f = [[0] * n] * m
        for i in range(0, m):
            for j in range(0, n):
                if i == 0 or j == 0:
                    f[i][j] = 1
                else:
                    f[i][j] = f[i-1][j] + f[i][j-1]
        return f[m-1][n-1]

# @lc code=end


solution = Solution()
res = solution.uniquePaths(3, 2)
print(res)
