#
# @lc app=leetcode.cn id=199 lang=python3
#
# [199] 二叉树的右视图
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        resList = []
        que = [root]
        nextQue = []

        while que:
            curnode = que.pop(0)
            if curnode.left:
                nextQue.append(curnode.left)
            if curnode.right:
                nextQue.append(curnode.right)
            if not que:
                resList.append(curnode.val)
                que = nextQue
                nextQue = []
        return resList
            
            
# @lc code=end

