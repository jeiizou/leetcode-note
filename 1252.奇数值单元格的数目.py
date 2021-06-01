#
# @lc app=leetcode.cn id=1252 lang=python3
#
# [1252] 奇数值单元格的数目
#
from typing import List

# @lc code=start


class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        ms = [0] * m
        ns = [0] * n
        for indice in indices:
            ms[indice[0]] += 1
            ns[indice[1]] += 1
        # ret = 0
        # for mi in ms:
        #     for ni in ns:
        #         if (mi + ni) % 2 == 1:
        #             ret = ret + 1

        a = 0
        for mi in ms:
            if mi % 2 == 1:
                a = a + 1

        b = 0
        for ni in ns:
            if ni % 2 == 1:
                b = b + 1

        return a * n + b * m - 2 * a * b
# @lc code=end


solution = Solution()
print(solution.oddCells(2, 3, [[0, 1], [1, 1]]))
print(solution.oddCells(2, 2, [[1, 1], [0, 0]]))
print(solution.oddCells(48, 37, [[40, 5]]))
