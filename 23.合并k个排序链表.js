/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length > 2) {
        let mid_index = Math.floor(lists.length / 2);
        return merge2List(mergeKLists(lists.slice(0, mid_index + 1)), mergeKLists(lists.slice(mid_index + 1)));
    } else if (lists.length === 2) {
        return merge2List(lists[0], lists[1]);
    } else if (lists.length === 1) {
        return lists[0];
    } else {
        return null;
    }
};

function merge2List(list1, list2) {
    let res = { val: null, next: null };
    let header = res;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            res.next = list1;
            list1 = list1.next;
        } else {
            res.next = list2;
            list2 = list2.next;
        }
        res = res.next;
    }

    if (list1 && !list2) {
        res.next = list1;
    }

    if (!list1 && list2) {
        res.next = list2;
    }

    return header.next;
}
// @lc code=end

