#
# @lc app=leetcode.cn id=623 lang=python3
#
# [623] 在二叉树中增加一行
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def addOneRow(self, root: TreeNode, v: int, d: int) -> TreeNode:
        if d == 1:
            node = TreeNode(v)
            node.left = root
            return node

        level = 2
        que = [root]
        while que and level <= d:
            nextQue = []
            for node in que:
                if level == d:
                    temp = node.left
                    node.left = TreeNode(v)
                    node.left.left = temp
                    temp = node.right
                    node.right = TreeNode(v)
                    node.right.right = temp
                if node.left:
                    nextQue.append(node.left)
                if node.right:
                    nextQue.append(node.right)
            que = nextQue
            level += 1
        return root


# @lc code=end
