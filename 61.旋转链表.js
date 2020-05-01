/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // base example
    if (!head) {
        return null;;
    }
    if (head.next === null) {
        return head;
    }

    let listLength = readListLength(head);
    k = k % listLength;
    if (k === 0) {
        return head;
    }

    let res_k = listLength - k;
    let index = 1;
    let cHead = head;
    let cNode = cHead;
    while (index <= listLength) {
        let nextNode = cNode.next;

        if (index === listLength && cNode.next === null) {
            cNode.next = head;
        }

        if (index === res_k) {
            cNode.next = null;
            cHead = nextNode;
        }

        cNode = nextNode;
        index++;
    }

    return cHead;
};

function readListLength(head, length = 0) {
    if (head) {
        length++;
    }
    if (head.next !== null) {
        return readListLength(head.next, length);
    } else {
        return length;
    }
}
// @lc code=end

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function readList(head, res = []) {
    if (head && head.val !== undefined) {
        res.push(head.val);
    }
    if (head && head.next !== null) {
        return readList(head.next, res);
    } else {
        return res;
    }
}

let head = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(readList(rotateRight(head, 4)));