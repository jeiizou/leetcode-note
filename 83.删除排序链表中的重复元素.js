/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function (head) {
    let curNode = head;
    while (curNode && curNode.next) {
        if (curNode.val === curNode.next.val) {
            if (curNode.next.next) {
                curNode.next = curNode.next.next;
            } else {
                curNode.next = null;
            }
        } else {
            curNode = curNode.next;
        }
    }

    return head;
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

    return str;
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

let node = generatorList([1, 1, 1, 1, 1, 3]);

node = deleteDuplicates(node);

let resStr = readList(node);
console.log(resStr);