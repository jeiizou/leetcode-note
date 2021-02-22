#
# @lc app=leetcode.cn id=606 lang=python3
#
# [606] 根据二叉树创建字符串
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def tree2str(self, t: TreeNode) -> str:
        if not t:
            return ''
        strVal = str(t.val)
        leftVal = self.tree2str(t.left)
        rightVal = self.tree2str(t.right)
        if rightVal:
            strVal = strVal + '(' + leftVal + ')' + '('+rightVal+')'
        elif leftVal:
            strVal = strVal + '(' + leftVal + ')'

        return strVal

# @lc code=end
