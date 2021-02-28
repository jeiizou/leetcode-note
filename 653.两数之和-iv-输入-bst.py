#
# @lc app=leetcode.cn id=653 lang=python3
#
# [653] 两数之和 IV - 输入 BST
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: TreeNode, k: int) -> bool:
        values = []
        ans = False

        def DFS(node):
            nonlocal ans
            if not node:
                return
            DFS(node.left)
            if k - node.val in values:
                ans = True
                return
            values.append(node.val)
            DFS(node.right)
        DFS(root)
        return ans


# @lc code=end
