#
# @lc app=leetcode.cn id=547 lang=python3
#
# [547] 省份数量
#
from typing import List
# @lc code=start


class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        fa = [i for i in range(n)]
        def find(x):
            if x == fa[x]:
                return x
            else:
                fa[x] = find(fa[x])
                return fa[x]
        def union(i, j):
            fa[find(i)] = find(j)

        for i in range(0, n):
            for j in range(i, n):
                if isConnected[i][j] == 1 and i != j:
                    union(i, j)

        ans = 0
        for i in range(0, len(fa)):
            if i == fa[i]:
                ans += 1
        return ans


# @lc code=end


sol = Solution()
res = sol.findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])
print(res)
