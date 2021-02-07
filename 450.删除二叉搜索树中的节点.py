#
# @lc app=leetcode.cn id=450 lang=python3
#
# [450] 删除二叉搜索树中的节点
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def deleteNode(self, root: TreeNode, key: int) -> TreeNode:
        # def findNode(node, preNode, order):
        #     nonlocal key
        #     if not node:
        #         return
        #     if node.val == key:
        #         # change tree
        #         nextTree = None
        #         if node.left:
        #             nextTree = node.left
        #             point = nextTree
        #             while point.right:
        #                 point = point.right
        #             point.right = node.right
        #         elif node.right:
        #             nextTree = node.right
        #             point = nextTree
        #             while point.left:
        #                 point = point.left
        #             point.left = node.left
        #         if order == 1:
        #             preNode.left = nextTree
        #         elif order == 0:
        #             preNode.right = nextTree
        #     elif node.val < key:
        #         findNode(node.right, node, 0)
        #     elif node.val > key:
        #         findNode(node.left, node, 1)
        # nullNode = TreeNode(None)
        # nullNode.left = root
        # findNode(root, nullNode, 1)
        # return nullNode.left
        if not root:
            return None
        if key < root.val:
            root.left = self.deleteNode(root.left, key)
            return root
        elif key > root.val:
            root.right = self.deleteNode(root.right, key)
            return root
        elif key == root.val:
            if not (root.left or root.right):
                root = None
            # the node is not a leaf and has a right child
            elif root.right:
                root.val = self.successor(root)
                root.right = self.deleteNode(root.right, root.val)
            # the node is not a leaf, has no right child, and has a left child
            else:
                root.val = self.predecessor(root)
                root.left = self.deleteNode(root.left, root.val)
            return root

    def successor(self, root):
        """
        One step right and then always left
        """
        root = root.right
        while root.left:
            root = root.left
        return root.val
    
    def predecessor(self, root):
        """
        One step left and then always right
        """
        root = root.left
        while root.right:
            root = root.right
        return root.val


# @lc code=end

# root = TreeNode(5)
# root.left = TreeNode(3)
# root.left.left = TreeNode(2)
# root.left.right = TreeNode(4)
# root.right = TreeNode(6)
# root.right.right = TreeNode(7)

# solution = Solution()
# res = solution.deleteNode(root, 3)
# print(res)
