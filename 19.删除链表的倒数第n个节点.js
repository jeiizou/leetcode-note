/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let headNode = head;
    let curNode = head;

    if (n < 1) {
        return head;
    }

    let count = 0;
    while (curNode.next) {
        count++;
        if (count > n) {
            headNode = headNode.next;
        }
        curNode = curNode.next;
    }

    // 删除尾结点
    if (n === 1) {
        if (count === 0) {
            return head.next;
        }
        headNode.next = null;
        return head;
    }
    // 删除头结点
    if (headNode === head && count + 1 === n) {
        return head.next;
    }

    headNode.next = headNode.next.next;
    return head;
};
// @lc code=end

