#
# @lc app=leetcode.cn id=572 lang=python3
#
# [572] 另一个树的子树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        def dfs(node: TreeNode):
            if not node:
                return False
            if node.val == t.val and self.isSameTree(node, t):
                return True
            else:
                return dfs(node.left) or dfs(node.right)
        return dfs(s)

    def isSameTree(self, l: TreeNode, r: TreeNode) -> bool:
        if not l and not r:
            return True
        elif l and r:
            return l.val == r.val and self.isSameTree(l.left, r.left) and self.isSameTree(l.right, r.right)
        else:
            return False


# @lc code=end
