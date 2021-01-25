#
# @lc app=leetcode.cn id=337 lang=python3
#
# [337] 打家劫舍 III
#
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
    def rob(self, root: TreeNode) -> int:
        def robRoot(root):
            if not root:
                return [0, 0]
            l = robRoot(root.left)
            r = robRoot(root.right)
            selected = root.val + l[1] + r[1];
            nonSelected = max(l[0],l[1]) + max(r[0], r[1])
            return [selected, nonSelected]

        r = robRoot(root)
        return max(r[0], r[1])

# @lc code=end

# [4,1,null,2,null,3]
root = TreeNode(3)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.right = TreeNode(3)
root.right.right = TreeNode(1)

solution = Solution()
res = solution.rob(root)
print(res)
