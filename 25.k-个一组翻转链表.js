/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
    let stackList = { val: null, next: null };
    let stackHead = stackList;

    let reversedKGroup = { val: null, next: null };
    let reversedHead = reversedKGroup;

    let curList = head;


    let i = 0;
    while (curList) {
        stackHead.next = curList;
        curList = curList.next;
        stackHead.next.next = null;
        stackHead = stackHead.next;
        i++;

        if (i >= k) {
            let revertedList = revertList(stackList.next);
            reversedHead.next = revertedList;
            while (reversedHead.next) {
                reversedHead = reversedHead.next;
            };
            stackList = { val: null, next: null };
            stackHead = stackList;
            i = 0;
        }
    }

    if (stackList.next) {
        reversedHead.next = stackList.next;
    }

    return reversedKGroup.next;
};

function revertList(list) {
    let head = list;
    let tail = null;
    let newHead = null;
    while (head) {
        let tempNode = head;
        if (!head.next) {
            newHead = head;
        }
        head = head.next;
        tempNode.next = tail;
        tail = tempNode;
    };
    return newHead;
}

// function readList(list) {
//     let i = [];
//     while (list) {
//         i.push(list.val);
//         list = list.next;
//     };
//     return i;
// }

// let list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }
// console.log(readList(reverseKGroup(list, 3)));
// @lc code=end

