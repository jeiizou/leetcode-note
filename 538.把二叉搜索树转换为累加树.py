#
# @lc app=leetcode.cn id=538 lang=python3
#
# [538] 把二叉搜索树转换为累加树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        sum = 0

        def dfs(node: TreeNode):
            nonlocal sum
            if not node:
                return
            dfs(node.right)
            sum += node.val
            node.val = sum
            dfs(node.left)

        dfs(root)
        return root
# @lc code=end
