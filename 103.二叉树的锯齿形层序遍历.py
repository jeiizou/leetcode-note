#
# @lc app=leetcode.cn id=103 lang=python3
#
# [103] 二叉树的锯齿形层次遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root:
            return []
        order = False
        que = [root]
        ans = []
        while que:
            values = []
            nextQue = []
            for node in que:
                values.append(node.val)
                if node.left:
                    nextQue.append(node.left)
                if node.right:
                    nextQue.append(node.right)
            if order:
                values.reverse()
            ans.append(values)
            order = not order
            que = nextQue
        return ans
# @lc code=end
