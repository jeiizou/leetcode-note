#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] 合并K个排序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        n = len(lists)
        if n == 2:
            return self.mergeTwoLists(lists[0], lists[1])
        elif n == 1:
            return lists[0]
        elif n == 0:
            return None
        else:
            mid = n // 2
            return self.mergeTwoLists(
                self.mergeKLists(lists[:mid]),
                self.mergeKLists(lists[mid:])
            )

    # 合并两个有序链表
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

