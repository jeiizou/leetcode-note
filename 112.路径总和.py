#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] 路径总和
#
import collections

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root:
            return False
        
        if not root.left and not root.right:
            return root.val == sum
        
        que = collections.deque([(root, root.val)])
        while que:
            node, csum = que.popleft()
            if csum == sum:
                return True
            if node.left:
                que.append((node.left, node.val + csum))
            if node.right:
                que.append((node.right, node.val + csum))
        return False
# @lc code=end

root = TreeNode(1)
root.left = TreeNode(2)
res = solution = Solution(root, 1)
print(res)