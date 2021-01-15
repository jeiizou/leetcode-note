#
# @lc app=leetcode.cn id=145 lang=python3
#
# [145] 二叉树的后序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if not root:
            return []

        que = []
        def readTree(node):
            if node.left:
                readTree(node.left)
            if node.right:
                readTree(node.right)
            que.append(node.val)

        readTree(root)
        return que
        
# @lc code=end

