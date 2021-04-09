#
# @lc app=leetcode.cn id=142 lang=python3
#
# [142] 环形链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head:
            return None
        # 快慢指针
        fast = slow = head
        while fast:
            slow = slow.next
            # 快指针每次走两步
            if fast.next:
                fast = fast.next.next
            else:
                return None
            # 如果快指针赶上了满指针
            # 推论在于: 相遇点到入环点的距离 + (n-1) * 环长 = 链表头到入环点的距离
            if fast == slow:
                ptr = head
                while ptr != slow:
                    ptr = ptr.next
                    slow = slow.next
                return ptr
        return None


# @lc code=end
