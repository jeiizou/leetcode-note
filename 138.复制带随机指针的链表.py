#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] 复制带随机指针的链表
#

class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""


class Solution:
    visited = {}
    def copyRandomList(self, head: 'Node') -> 'Node':
        # if not head:
        #     return None

        # headLink = head
        # restList = Node(0)
        # # (newNode, randomNode)
        # stack = []

        # # 第一次循环, 建立新链和保存链关系
        # newHead = restList
        # while head:
        #     newHead.next = Node(head.val)
        #     # 当前的节点指针是否指向某个随机节点
        #     # 如果是, 将新链中的节点和该随机节点保存的列表中
        #     if head.random:
        #         stack.append((newHead.next, head.random))
        #     head = head.next
        #     newHead = newHead.next

        # # 第二次循环, 建立链关系
        # newHead = restList.next
        # head = headLink
        # while head:
        #     # 判断当前节点连接了那些节点
        #     for index in range(len(stack)):
        #         newNode, randomNode = stack[index]
        #         if randomNode == head:
        #             newNode.random = newHead

        #     head = head.next
        #     newHead = newHead.next

        # # 返回结果
        # return restList.next

        # 解法2: 图的遍历
        # dct = {}
        # def dfs(head: 'Node') -> 'Node':
        #     if not head:
        #         return 
        #     if head in dct:
        #         return dct[head]
        #     ret = Node(head.val)
        #     dct[head] = ret
        #     ret.next = dfs(head.next)
        #     ret.random = dfs(head.random)
        #     return ret
        # return dfs(head)

        # 解法3 拷贝节点
        if not head:
            return head
        old_node = head
        new_node = Node(old_node.val)
        self.visited[old_node] = new_node
        while old_node:
            new_node.random = self.getClonedNode(old_node.random)
            new_node.next = self.getClonedNode(old_node.next)
            old_node = old_node.next
            new_node = new_node.next
        return self.visited[head]

    def getClonedNode(self, node):
        if not node:
            return None
        if node not in self.visited:
            self.visited[node] = Node(node.val)
        return self.visited[node]
        

# @lc code=end

head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.random = head.next
head.next.random = head
head.next.next.random = head

solution = Solution()
res = solution.copyRandomList(head)
while res:
    if res:
        print(res.val)
    if res.random:
        print('random', res.random.val)
    res = res.next
