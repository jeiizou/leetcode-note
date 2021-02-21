#
# @lc app=leetcode.cn id=530 lang=python3
#
# [530] 二叉搜索树的最小绝对差
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        minVal = float('inf')
        preVal = -1

        def dfs(node):
            nonlocal minVal, preVal
            if not node:
                return
            if node.left:
                dfs(node.left)
            if preVal != -1:
                minVal = min(minVal, abs(node.val - preVal))
            preVal = node.val
            if node.right:
                dfs(node.right)

        dfs(root)
        return minVal


# @lc code=end
