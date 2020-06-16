/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let m = {
        val: null,
        next: head
    };
    let k = m;
    let c = m;

    while (m.next) {
        if (m.next.val < x) {
            if (k.next == m.next) {
                k = k.next;
                m = m.next;
            } else {
                let temp_k = k.next;
                let temp_m = m.next;
                m.next = m.next.next || null;
                k.next = temp_m;
                k.next.next = temp_k;

                k = k.next;
            }
        } else {
            m = m.next;
        }
    }

    return c.next;
};
// @lc code=end

function readList(head) {
    let str = ''
    while (head) {
        str += head.val;
        if (head.next) {
            str += '->'
        };
        head = head.next;
    }

    console.log(str);
}

function generatorList(list) {
    let ListNode = function (val) {
        this.val = val;
        this.next = null;
    }
    let head = new ListNode(null);
    let resHead = head;
    for (let i = 0; i < list.length; i++) {
        const val = list[i];
        let node = new ListNode(val);
        head.next = node;
        head = node;
    }

    return resHead.next;
}

let node = generatorList([2, 1]);
node = partition(node, 2);
readList(node);