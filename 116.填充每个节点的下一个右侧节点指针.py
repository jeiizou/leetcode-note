#
# @lc app=leetcode.cn id=116 lang=python3
#
# [116] 填充每个节点的下一个右侧节点指针
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        # 解法1 层级遍历
        # que = [root]
        # nextque = []
        # prev = None
        # while que:
        #     curr = que.pop(0)
        #     if prev:
        #         prev.next = curr
        #     if curr.left:
        #         nextque.append(curr.left)
        #     if curr.right:
        #         nextque.append(curr.right)
        #     if not que:
        #         curr.next = None
        #         que = nextque
        #         nextque = []
        #         prev = None
        #     else:
        #         prev = curr
        # return root

        # 解法2 利用已有的next指针访问临近节点
        leftmost = root
        while leftmost.left:
            head = leftmost
            while head:
                # 当前树内部的next处理
                head.left.next = head.right
                # 树之间next的处理
                if head.next:
                    head.right.next = head.next.left
                head = head.next
            leftmost = leftmost.left
        return root
            


        
# @lc code=end