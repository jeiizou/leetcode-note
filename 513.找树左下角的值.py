#
# @lc app=leetcode.cn id=513 lang=python3
#
# [513] 找树左下角的值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: TreeNode) -> int:
        que = [root]
        curVal = root.val
        while que:
            nextQue = []
            for node in que:
                if node.left:
                    nextQue.append(node.left)
                if node.right:
                    nextQue.append(node.right)
            if nextQue:
                curVal = nextQue[0].val
            que = nextQue
        return curVal
# @lc code=end
