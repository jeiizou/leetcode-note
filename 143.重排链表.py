#
# @lc app=leetcode.cn id=143 lang=python3
#
# [143] 重排链表
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
    def reorderList(self, head: ListNode) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        if not head:
            return None

        slow = fast = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        tail = self.reverseList(slow.next)
        slow.next = None

        while head and tail:
            nexTail = tail.next
            next = head.next

            tail.next = next
            head.next = tail

            tail = nexTail
            head = next


    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev


# @lc code=end

def readLink(head: ListNode):
    while head:
        print(head.val)
        head = head.next


list = ListNode(1)
list.next = ListNode(2)
list.next.next = ListNode(3)
list.next.next.next = ListNode(4)
# list.next.next.next.next = ListNode(5)

solution = Solution()
solution.reorderList(list)
readLink(list)
