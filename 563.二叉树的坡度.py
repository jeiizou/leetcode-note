#
# @lc app=leetcode.cn id=563 lang=python3
#
# [563] 二叉树的坡度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    tilt = 0

    def findTilt(self, root: TreeNode) -> int:
        self.getTreeSum(root)
        return self.tilt

    def getTreeSum(self, node: TreeNode):
        if not node:
            return 0
        L = self.getTreeSum(node.left)
        R = self.getTreeSum(node.right)
        self.tilt += abs(L - R)
        return L + R + node.val


# @lc code=end
