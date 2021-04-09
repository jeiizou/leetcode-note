#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] 相交链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        # 获取A的尾指针
        tail = headA
        while tail and tail.next:
            tail = tail.next
        # 建立环
        tail.next = headB
        # 建立快慢指针
        slow = fast = headA
        while fast:
            slow = slow.next
            fast = fast.next
            if fast:
                fast = fast.next
            else:
                # 不存在环, 说明两个链表不相交
                # 结束之前解开环
                tail.next = None
                return None
            # 如果快指针赶上了慢指针
            if fast == slow:
                ptr = headA
                while ptr != slow:
                    ptr = ptr.next
                    slow = slow.next
                # 结束之前解开环
                tail.next = None
                return ptr
        # 结束之前解开环
        tail.next = None
        return None
# @lc code=end

