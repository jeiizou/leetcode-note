# coding:utf-8

#
# @lc app=leetcode.cn id=437 lang=python3
#
# [437] 路径总和 III
#

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    # 我的解法
    def pathSum(self, root: TreeNode, sum: int) -> int:
        total = 0
        def dfs(node: TreeNode, path):
            nonlocal total
            if not node:
                return
            total += self.getSumCount(path + [node.val], sum)
            dfs(node.left, path + [node.val])
            dfs(node.right, path + [node.val])
        dfs(root, [])
        return total
    # 获取该路径上的所有可能的和的数量
    def getSumCount(self, path, curNum):
        total = 0
        head = 0
        while head < len(path):
            if curNum == sum(path[head:]):
                total += 1
            head += 1
        return total

    # 优化解法: 前缀和
    # def pathSum(self, root: TreeNode, sum: int) -> int:
    #     total = 0
    #     def dfs(node: TreeNode, sumPath):
    #         nonlocal total
    #         if not node:
    #             return
    #         currSum = node.val + (sumPath[-1] if len(sumPath) else 0)
    #         total += self.getSumCount(sumPath + [currSum], sum)
    #         dfs(node.left, sumPath + [currSum])
    #         dfs(node.right, sumPath + [currSum])
    #     dfs(root, [])
    #     return total
    # # 获取该路径上的所有可能的和的数量
    # def getSumCount(self, path, curNum):
    #     total = 0
    #     head = 0
    #     while head < len(path):
    #         if curNum + path[head] == path[-1]:
    #             total += 1
    #         head += 1
    #     return total
# @lc code=end


root = TreeNode(10)
root.left = TreeNode(5)
root.right = TreeNode(-3)
root.left.left = TreeNode(3)
root.left.right = TreeNode(2)
root.right.right = TreeNode(11)
root.left.left.left = TreeNode(3)
root.left.left.right = TreeNode(-2)
root.left.right.right = TreeNode(1)


solution = Solution()
res = solution.pathSum(root, 8)
print(res)
