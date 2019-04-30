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
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let resnode=ListNode(l1.val);

    function ReadNode(node){

        let value=node.val;
        
        



        if(node.next){
            ReadNode(node.next);
        }
    }
};
