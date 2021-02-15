#
# @lc app=leetcode.cn id=501 lang=python3
#
# [501] 二叉搜索树中的众数
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findMode(self, root: TreeNode) -> List[int]:
        answer = []
        base = 0
        count = 0
        maxCount = 0

        def update(x):
            nonlocal answer, base, count, maxCount
            if x == base:
                count += 1
            else:
                count = 1
                base = x
            if count == maxCount:
                answer.append(base)
            if count > maxCount:
                maxCount = count
                answer = [base]

        def readTree(node):
            if not node:
                return
            readTree(node.left)
            update(node.val)
            readTree(node.right)
        readTree(root)

        return answer


# @lc code=end
