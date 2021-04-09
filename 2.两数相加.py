#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        p1 = l1
        p2 = l2
        h = ListNode(None)
        ans = h
        carry = 0
        while p1 or p2:
            val = carry
            if p1:
                val += p1.val
            if p2:
                val += p2.val
            carry = val // 10
            h.next = ListNode(val % 10)
            if p1:
                p1 = p1.next
            if p2:
                p2 = p2.next
            h = h.next
        if carry:
            h.next = ListNode(carry)
        return ans.next
# @lc code=end
