#
# @lc app=leetcode.cn id=113 lang=python3
#
# [113] 路径总和 II
#

from typing import List
import collections
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @lc code=start
# Definition for a binary tree node.

getSum = sum
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        if not root:
            return []
        
        if not root.left and not root.right:
            if root.val == sum:
                return [[root.val]]
        
        res = [];
        que = collections.deque([(root, [], 0)]);
        while que:
            node, path, count = que.popleft()

            if not node.left and not node.right:
                if count + node.val == sum:
                    res.append(path + [node.val])

            if node.left:
                que.append((node.left, path + [node.val], node.val + count))
            if node.right:
                que.append((node.right, path + [node.val], node.val + count))
        
        return res
        
# @lc code=end

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
solution = Solution()
res = solution.pathSum(root, 4)
print(res)