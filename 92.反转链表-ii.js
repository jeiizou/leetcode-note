/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

const { right } = require("trim");

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    // Empty list
    if (head == null) {
        return null;
    }

    let cur = head, prev = null;
    while (m > 1) {
        prev = cur;
        cur = cur.next;
        m--;
        n--;
    }

    let con = prev;
    let tail = cur;
    while (n > 0) {
        let third = cur.next;
        cur.next = prev;
        prev = cur;
        cur = third;
        n--;
    }

    if (con != null) {
        con.next = prev
    } else {
        head = prev;
    }

    tail.next = cur;
    return head;
};
// @lc code=end

