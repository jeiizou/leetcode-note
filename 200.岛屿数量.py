#
# @lc app=leetcode.cn id=200 lang=python3
#
# [200] 岛屿数量
#
from typing import List
# @lc code=start


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        width = len(grid[0])
        height = len(grid)
        ans = 0

        def travers(i, j):
            if grid[i][j] != '1':
                return

            grid[i][j] = - 1
            if i - 1 >= 0:
                travers(i-1, j)
            if j - 1 >= 0:
                travers(i, j-1)
            if i + 1 < height:
                travers(i+1, j)
            if j + 1 < width:
                travers(i, j+1)

        for i in range(height):
            for j in range(width):
                if grid[i][j] == '1':
                    ans = ans + 1
                    travers(i, j)

        return ans

# @lc code=end


solution = Solution()
ans = solution.numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])
print(ans)
