#
# @lc app=leetcode.cn id=236 lang=python3
#
# [236] 二叉树的最近公共祖先
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        # 如果没有树
        if not root:
            return None
        # 如果当前节点等于其中一个节点, 该节点就是公共祖先节点
        if root.val == p.val or root.val == q.val:
            return root
        # 右子树是否存在p或者q, 若存在, 返回其中的一个
        rightflag = self.lowestCommonAncestor(root.right, p, q)
        # 左子树是否存在p或者q, 若存在, 返回其中的一个
        leftflag = self.lowestCommonAncestor(root.left, p, q)
        # 左子树和右子树都存在, 则当前节点时最近公共组件节点
        if rightflag and leftflag:
            return root
        elif rightflag:
            return rightflag
        elif leftflag:
            return leftflag
        else:
            return None
# @lc code=end
