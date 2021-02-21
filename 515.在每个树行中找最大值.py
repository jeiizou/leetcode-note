#
# @lc app=leetcode.cn id=515 lang=python3
#
# [515] 在每个树行中找最大值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        que = [root]
        answer = [root.val]
        while que:
            nextQue = []
            max = float('-inf')
            for node in que:
                if node.left:
                    nextQue.append(node.left)
                    if node.left.val > max:
                        max = node.left.val
                if node.right:
                    nextQue.append(node.right)
                    if node.right.val > max:
                        max = node.right.val
            if nextQue:
                answer.append(max)
            que = nextQue
        return answer
# @lc code=end
