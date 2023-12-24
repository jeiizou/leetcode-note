#
# @lc app=leetcode.cn id=2583 lang=python3
#
# [2583] 二叉树中的第 K 大层和
#

from typing import Optional


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
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:
        levelCount = []
        curNodes = [root]
        while len(curNodes) > 0:
            count = 0
            nextLevel = []
            for node in curNodes:
                count = count + node.val
                if node.left:
                    nextLevel.append(node.left)
                if node.right:
                    nextLevel.append(node.right)
            levelCount.append(count)
            curNodes = nextLevel
        if len(levelCount) < k:
            return -1
        # 降序排序
        levelCount.sort(reverse=True)
        return levelCount[k-1]
# @lc code=end


sol = Solution()

tree = TreeNode(1, TreeNode(2, TreeNode(3)))

res = sol.kthLargestLevelSum(tree, 1)
print(res);