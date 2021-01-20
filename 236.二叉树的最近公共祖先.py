#
# @lc app=leetcode.cn id=236 lang=python3
#
# [236] 二叉树的最近公共祖先
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root:
            return root
        if root.val == p.val or root.val == q.val:
            return root

        rightflag = self.lowestCommonAncestor(root.right, p, q)
        leftflag = self.lowestCommonAncestor(root.left, p, q)

        if rightflag and leftflag:
            return root
        elif rightflag:
            return rightflag
        elif leftflag:
            return leftflag
# @lc code=end

