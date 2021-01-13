#
# @lc app=leetcode.cn id=114 lang=python3
#
# [114] 二叉树展开为链表
#

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    # list = TreeNode()
    def flatten(self, root:TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root:
            return root;

        # 解法1 前序遍历   
        # head = self.list;
        # self.dfs(root)
        # root.right = head.right.right;
        # root.left = None

        # 解法2 前序遍历和展开同时进行
        # stack = [ root ]
        # prev = None

        # while stack:
        #     curr = stack.pop()
        #     print(curr.val)
        #     if prev:
        #         prev.left = None
        #         prev.right = curr
        #     left, right = curr.left, curr.right
        #     if right:
        #         stack.append(right)
        #     if left:
        #         stack.append(left)
        #     prev = curr

        # 解法3 寻找前驱节点
        curr = root
        while curr:
            if curr.left:
                predecessor = nxt = curr.left
                while predecessor.right:
                    predecessor = predecessor.right
                predecessor.right = curr.right
                curr.left = None
                curr.right = nxt
            curr = curr.right

    
    # def dfs(self, root):
    #     self.list.right = TreeNode(root.val)
    #     self.list = self.list.right
    #     if root.left:
    #         self.dfs(root.left)
    #     if root.right:
    #         self.dfs(root.right)
        
            
# @lc code=end

# root = TreeNode(1)
# root.left = TreeNode(2)
# root.right = TreeNode(5)
# root.left.left = TreeNode(3)
# root.left.right = TreeNode(4)
# root.right.right = TreeNode(6)

# solution = Solution()
# res = solution.flatten(root)