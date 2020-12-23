/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head == null) return null;
    else if (head.next == null) return new TreeNode(head.val);

    let pre = head;
    let p = pre.next;
    let q = p.next;

    //找到链表的中点p
    while (q != null && q.next != null) {
        pre = pre.next;
        p = pre.next;
        q = q.next.next;
    }

    //将中点左边的链表分开
    pre.next = null;
    let root = new TreeNode(p.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(p.next);
    return root;
};
// @lc code=end

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let list = {
    val: 0,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                    },
                },
            },
        },
    },
};

let resTree = sortedListToBST(list);
console.log('结果为');
console.log(resTree);
