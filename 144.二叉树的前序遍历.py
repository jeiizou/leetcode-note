#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] 二叉树的前序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
    
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if not root:
            return []

        que = []
        def readTree(node):
            que.append(node.val)
            if node.left:
                readTree(node.left)
            if node.right:
                readTree(node.right)

        readTree(root)
        return que
        
# @lc code=end

# root = TreeNode(1)
# root.right = TreeNode(2)
# root.right.left = TreeNode(3)

# solution = Solution()
# res = solution.preorderTraversal(root)
# print(res)