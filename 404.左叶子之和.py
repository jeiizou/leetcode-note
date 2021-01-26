#
# @lc app=leetcode.cn id=404 lang=python3
#
# [404] 左叶子之和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        total = 0
        if not root:
            return 0
        def dfs(node: TreeNode):
            nonlocal total
            if not node:
                return 
            dfs(node.left)
            dfs(node.right)
            if node.left:
                if not node.left.left and not node.left.right:
                    total += node.left.val
        dfs(root)
        return total
        
# @lc code=end

