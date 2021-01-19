#
# @lc app=leetcode.cn id=235 lang=python3
#
# [235] 二叉搜索树的最近公共祖先
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # '''
        # 1. 判断左子树和右子树是否包含所求节点
        # 2. 如果左右节点都在某个子树, 则递归该子树
        # 3. 如果左右节点在不同的子树, 则该节点就是最近公共祖先
        # 4. 处理当前节点的值等于其中某个节点的情况

        # 此解法适用于所有二叉树
        # '''
        # if not root:
        #     return root
        # if root.val == p.val or root.val == q.val:
        #     return root

        # rightflag = self.lowestCommonAncestor(root.right, p, q)
        # leftflag = self.lowestCommonAncestor(root.left, p, q)

        # if rightflag and leftflag:
        #     return root
        # elif rightflag:
        #     return rightflag
        # elif leftflag:
        #     return leftflag

        # 此解法适用于二叉搜索树
        ancestor = root
        while True:
            if p.val < ancestor.val and q.val < ancestor.val:
                ancestor = ancestor.left
            elif p.val > ancestor.val and q.val > ancestor.val:
                ancestor = ancestor.right
            else:
                break
        return ancestor
# @lc code=end
