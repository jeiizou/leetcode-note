#
# @lc app=leetcode.cn id=695 lang=python3
#
# [695] 岛屿的最大面积
#
from typing import List
# @lc code=start
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        if m == 0 or n == 0:
            return 0
        maxvalue = 0

        def dfs(i, j):
            nonlocal m, n, maxvalue
            if grid[i][j] != 1:
                return 0
            grid[i][j] = -1
            ans = 1
            if i + 1 < m:
                ans += dfs(i+1, j)
            if i - 1 >= 0:
                ans += dfs(i-1, j)
            if j + 1 < n:
                ans += dfs(i, j+1)
            if j - 1 >= 0:
                ans += dfs(i, j-1)
            return ans

        for i in range(0, m):
            for j in range(0, n):
                if grid[i][j] == 1:
                    val = dfs(i, j)
                    if val > maxvalue:
                        maxvalue = val

        return maxvalue


# @lc code=end

solution = Solution()
ans = solution.maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])

print(ans)
