#
# @lc app=leetcode.cn id=617 lang=python3
#
# [617] 合并二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
        if root1 and root2:
            return TreeNode(root1.val + root2.val, self.mergeTrees(root1.left, root2.left), self.mergeTrees(root1.right, root2.right))
        else:
            return root1 or root2 or None
# @lc code=end
