#
# @lc app=leetcode.cn id=129 lang=python3
#
# [129] 求根到叶子节点数字之和
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def sumNumbers(self, root: TreeNode) -> int:
        if not root:
            return 0
        res = []
        def readNode(node, num):
            nonlocal res
            val = num + str(node.val)
            if not node.left and not node.right:
                res.append(int(val))
                return
            if node.left:
                readNode(node.left, val)

            if node.right:
                readNode(node.right, val)

        readNode(root, '')
        return sum(res)
# @lc code=end


root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)

solution = Solution()
res = solution.sumNumbers(root)
print(res)
