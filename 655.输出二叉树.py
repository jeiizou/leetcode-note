#
# @lc app=leetcode.cn id=655 lang=python3
#
# [655] 输出二叉树
#

from typing import List


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def printTree(self, root: TreeNode) -> List[List[str]]:
        # 获取树的高度
        d = self.getHeight(root)
        w = 2**d - 1
        C = [['' for _ in range(w)] for _ in range(d)]

        def dfs(root, level = 0, l = 0, r = w - 1):
            if not root:
                return
            mid = (l + r) // 2
            C[level][mid] = str(root.val)
            dfs(root.left, level + 1, l, mid - 1)
            dfs(root.right, level + 1, mid + 1, r)
        dfs(root)
        return C

    def getHeight(self, node: TreeNode):
        if not node:
            return 0
        return max(self.getHeight(node.left), self.getHeight(node.right)) + 1

# @lc code=end


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.right = TreeNode(4)

solution = Solution()
res = solution.printTree(root)
print(res)
