#
# @lc app=leetcode.cn id=148 lang=python3
#
# [148] 排序链表
#

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def readList(list):
    r = []
    while list:
        r.append(list.val)
        list = list.next
    print(r)

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    # def sortList(self, head: ListNode) -> ListNode:
    #     if not head:
    #         return None
    #     if not head.next:
    #         return head

    #     base, curr = head, head.next
    #     leftList, rightList = ListNode(None), ListNode(None)
    #     leftHead, rightHead = leftList, rightList
    #     while curr:
    #         if curr.val > base.val:
    #             rightList.next = curr
    #             rightList = rightList.next
    #         else:
    #             leftList.next = curr
    #             leftList = leftList.next
    #         curr = curr.next
    #     rightList.next = None
    #     leftList.next = None

    #     leftHead = self.sortList(leftHead.next)
    #     rightHead = self.sortList(rightHead.next)
    #     base.next = rightHead

    #     if leftHead:
    #         leftTail = leftHead
    #         while leftTail and leftTail.next:
    #             leftTail = leftTail.next
    #         leftTail.next = base
    #         return leftHead
    #     else:
    #         return base
    def sortList(self, head: ListNode) -> ListNode:
        def sortFunc(head: ListNode, tail: ListNode) -> ListNode:
            if not head:
                return head
            if head.next == tail:
                head.next = None
                return head
            slow = fast = head
            while fast != tail:
                slow = slow.next
                fast = fast.next
                if fast != tail:
                    fast = fast.next
            mid = slow
            return merge(sortFunc(head, mid), sortFunc(mid, tail))

        def merge(l1: ListNode, l2: ListNode):
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

        return sortFunc(head, None)


# @lc code=end
list = ListNode(4)
list.next = ListNode(2)
list.next.next = ListNode(1)
list.next.next.next = ListNode(3)

solution = Solution()
ans = solution.sortList(list)
readList(ans)
