#
# @lc app=leetcode.cn id=671 lang=python3
#
# [671] 二叉树中第二小的节点
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        if not root:
            return -1
        ans = float("inf")
        flag = False
        que = [root]
        while que:
            node = que.pop(0)
            if node.val > root.val:
                flag = True
                ans = min(node.val, ans)
            else:
                if node.left:
                    que.append(node.left)
                if node.right:
                    que.append(node.right)
        return ans if flag else -1
# @lc code=end
