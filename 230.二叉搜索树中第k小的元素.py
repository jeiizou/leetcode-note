#
# @lc app=leetcode.cn id=230 lang=python3
#
# [230] 二叉搜索树中第K小的元素
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        idx = 0
        val = None
        def midOrder(root: TreeNode):
            nonlocal idx
            nonlocal val
            if not root:
                return root;
            midOrder(root.left);
            idx += 1
            if idx == k:
                val = root.val
                return
            midOrder(root.right)
        midOrder(root)
        return val
        
# @lc code=end

