#
# @lc app=leetcode.cn id=684 lang=python3
#
# [684] 冗余连接
#
from typing import List
# @lc code=start


class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        # 解环
        nodesCount = len(edges)
        parent = list(range(nodesCount + 1))
        print(nodesCount, parent)

        def find(index: int) -> int:
            if parent[index] != index:
                parent[index] = find(parent[index])
            return parent[index]

        def union(index1: int, index2: int):
            parent[find(index1)] = find(index2)

        for node1, node2 in edges:
            if find(node1) != find(node2):
                union(node1, node2)
            else:
                return [node1, node2]

        return []
# @lc code=end


# path = [[9, 10], [5, 8], [2, 6], [1, 5], [3, 8],
#         [4, 9], [8, 10], [4, 10], [6, 8], [7, 9]]
path = [[1, 2], [1, 3], [2, 3]]
solution = Solution()
res = solution.findRedundantConnection(path)
print(res)
