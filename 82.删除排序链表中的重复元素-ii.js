/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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

    // 哑结点
    let preNode = {
        val: null,
        next: head
    };
    // 当前节点
    let curNode = preNode;

    while (preNode.next && preNode.next.next) {
        let nextNode = preNode.next;
        let next_nextNode = preNode.next.next;

        if (nextNode.val === next_nextNode.val) {
            while (nextNode.val === next_nextNode.val) {
                if (next_nextNode.next) {
                    next_nextNode = next_nextNode.next;
                } else {
                    next_nextNode = null;
                    break;
                }
            }
            preNode.next = next_nextNode;
        } else {
            preNode = nextNode;
        }
        // preNode = preNode.next;
    }

    return curNode.next;
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


let node = generatorList([1, 1, 2, 3]);

node = deleteDuplicates(node);

let resStr = readList(node);
console.log(resStr);