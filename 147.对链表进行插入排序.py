#
# @lc app=leetcode.cn id=147 lang=python3
#
# [147] 对链表进行插入排序
#
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def insertionSortList(self, head: ListNode) -> ListNode:
        if not head:
            return None
        if not head.next:
            return head
        curr = head.next
        head.next = None
        while curr:
            startNode = head
            prev = None
            inserFlag = False
            while startNode:
                if startNode.val >= curr.val:
                    currNext = curr.next
                    inserFlag = True
                    if prev:
                        prev.next = curr
                        curr.next = startNode
                    else:
                        temp = startNode
                        startNode = curr
                        startNode.next = temp
                        head = startNode
                    curr = currNext
                    break
                else:
                    prev = startNode
                    startNode = startNode.next
            if not inserFlag:
                currNext = curr.next
                prev.next = curr
                curr.next = None
                curr = currNext
        return head
# @lc code=end


# head = ListNode(-1)
# head.next = ListNode(5)
# head.next.next = ListNode(3)
# head.next.next.next = ListNode(4)
# head.next.next.next.next = ListNode(0)

# s = Solution()
# r = s.insertionSortList(head)
# print(r.val)
