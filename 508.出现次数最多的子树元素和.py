#
# @lc app=leetcode.cn id=508 lang=python3
#
# [508] 出现次数最多的子树元素和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def findFrequentTreeSum(self, root: TreeNode) -> List[int]:
        m = {}
        maxCount = 0
        answer = []

        def getSum(node: TreeNode):
            nonlocal maxCount, answer, m
            if not node:
                return 0
            # 子树元素和
            sum = getSum(node.left) + getSum(node.right) + node.val
            if sum in m:
                m[sum] += 1
            else:
                m[sum] = 1
            if m[sum] > maxCount:
                maxCount = m[sum]
                answer = [sum]
            elif m[sum] == maxCount:
                if sum not in answer:
                    answer.append(sum)

            return sum

        getSum(root)
        return answer
# @lc code=end
