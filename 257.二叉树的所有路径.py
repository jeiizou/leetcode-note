#
# @lc app=leetcode.cn id=257 lang=python3
#
# [257] 二叉树的所有路径
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        if not root:
            return []
        paths = []

        def dfs(node, path):
            nextPath = path + '->' + str(node.val) if path else str(node.val)
            if not node.left and not node.right:
                paths.append(nextPath)
                return
            if node.left:
                dfs(node.left, nextPath)
            if node.right:
                dfs(node.right, nextPath)
        dfs(root, '')
        return paths

# @lc code=end
