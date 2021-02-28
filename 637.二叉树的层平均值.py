#
# @lc app=leetcode.cn id=637 lang=python3
#
# [637] 二叉树的层平均值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        ret = []
        que = [root]
        while que:
            sum = 0
            nextQue = []
            for node in que:
                sum += node.val
                if node.left:
                    nextQue.append(node.left)
                if node.right:
                    nextQue.append(node.right)
            ret.append(sum / len(que))
            que = nextQue
        return ret

# @lc code=end
