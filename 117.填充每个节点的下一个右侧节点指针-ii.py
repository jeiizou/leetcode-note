#
# @lc app=leetcode.cn id=117 lang=python3
#
# [117] 填充每个节点的下一个右侧节点指针 II
#

class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


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
        head = root
        while head:  # 当前层的头节点
            cur = head  # 当前层处理节点
            pre = head = None  # 初始化下一层头节点和前置节点
            while cur:
                if cur.left:
                    if not pre:  # 若尚未找到下一层前置节点，则同步更新下一层头节点和前置节点
                        pre = head = cur.left
                    else:  # 已找到下一层前置节点，则将前置节点指向当前子节点，并前移pre
                        pre.next = cur.left
                        pre = pre.next
                if cur.right:
                    if not pre:
                        pre = head = cur.right
                    else:
                        pre.next = cur.right
                        pre = pre.next
                cur = cur.next
        return root
# @lc code=end


root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.right = Node(7)

solution = Solution()
resRoot = solution.connect(root)


def read(root):
    que = [root]
    while que:
        cur = que.pop(0)
        print(cur.val, cur.next)
        if cur.left:
            que.append(cur.left)
        if cur.right:
            que.append(cur.right)


read(resRoot)
