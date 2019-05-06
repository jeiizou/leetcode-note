/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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

var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    let node1 = l1;
    let node2 = l2;
    let resNode = l1.val <= l2.val ? l1 : l2;
    let head = resNode;
    while (node1 || node2) {
        let curNode;
        if (!node1) {
            curNode = node2;
            node2 = node2.next;
        } else if (!node2) {
            curNode = node1;
            node1 = node1.next;
        } else {
            if (node1.val <= node2.val) {
                curNode = node1;
                node1 = node1.next;
            } else {
                curNode = node2;
                node2 = node2.next;
            }
        }
        resNode.next = curNode;
        resNode = resNode.next;
    }
    return head;
};
