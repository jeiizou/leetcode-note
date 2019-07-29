/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resNode = new ListNode(0);
    let head = resNode;
    let ik = 0;

    while (l1 || l2) {
        let sum = l1.val + l2.val + ik;
        if (sum >= 10) {
            ik = 1;
            sum = sum % 10;
        } else {
            ik = 0;
        }
        resNode.val = sum;

        if (l2.next && !l1.next) {
            l1.next = new ListNode(0);
        } else if (l1.next && !l2.next) {
            l2.next = new ListNode(0);
        } else if (!l2.next && !l1.next) {
            if (ik === 1) {
                resNode.next = new ListNode(1);
            }
            break;
        }

        l1 = l1.next;
        l2 = l2.next;
        resNode.next = function() {};
        resNode = resNode.next;
    }

    return head;
};
