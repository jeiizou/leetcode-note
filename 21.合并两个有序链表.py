#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] 合并两个有序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1 or not l2:
            return l1 if not l2 else l2

        p1 = l1
        p2 = l2
        h = ListNode(None)
        ans = h
        while p1 and p2:
            if p1.val < p2.val:
                h.next = p1
                p1 = p1.next
            else:
                h.next = p2
                p2 = p2.next
            h = h.next
        if p1:
            h.next = p1
        else:
            h.next = p2

        return ans.next

# @lc code=end
