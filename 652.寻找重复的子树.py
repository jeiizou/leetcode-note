#
# @lc app=leetcode.cn id=652 lang=python3
#
# [652] 寻找重复的子树
#
import collections
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    # def findDuplicateSubtrees(self, root: TreeNode) -> List[TreeNode]:
    #     count = collections.Counter()
    #     ans = []

    #     def collect(node):
    #         if not node:
    #             return '#'
    #         serial = "{},{},{}".format(
    #             node.val, collect(node.left), collect(node.right))
    #         count[serial] += 1
    #         if count[serial] == 2:
    #             ans.append(node)
    #         return serial
    #     collect(root)
    #     return ans
    def findDuplicateSubtrees(self, root: TreeNode) -> List[TreeNode]:
        trees = collections.defaultdict()
        trees.default_factory = trees.__len__
        count = collections.Counter()
        ans = []
        def lookup(node):
            if node:
                uid = trees[node.val, lookup(node.left), lookup(node.right)]
                count[uid] += 1
                if count[uid] == 2:
                    ans.append(node)
                return uid
        lookup(root)
        return ans
# @lc code=end
