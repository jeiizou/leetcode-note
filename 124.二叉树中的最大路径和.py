#
# @lc app=leetcode.cn id=124 lang=python3
#
# [124] 二叉树中的最大路径和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    maxSum = -float('inf')

    def maxPathSum(self, root: TreeNode) -> int:
        self.maxGain(root)
        return self.maxSum

    def maxGain(self, node):
        if not node:
            return 0
        # 递归计算左右子节点的最大贡献值
        leftGain = max(self.maxGain(node.left), 0)
        rightGain = max(self.maxGain(node.right), 0)

        priceNewpath = node.val + leftGain + rightGain
        self.maxSum = max(self.maxSum, priceNewpath)

        return node.val + max(leftGain, rightGain)

# @lc code=end

# root = TreeNode(1)
# root.left = TreeNode(2)
# root.right = TreeNode(3)

# solution = Solution()
# res = solution.maxPathSum(root)
# print(res)
