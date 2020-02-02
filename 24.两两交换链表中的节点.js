/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    //pre working
    let preHead = { next: null, val: null };
    preHead.next = head;

    let curP = preHead;

    while (curP.next && curP.next.next) {
        let temp = null;
        if (curP.next.next.next) {
            temp = curP.next.next.next;
        };

        curP.next.next.next = curP.next;
        curP.next = curP.next.next;
        curP.next.next.next = temp;

        curP = curP.next.next;
    }

    return preHead.next;
};
// @lc code=end

