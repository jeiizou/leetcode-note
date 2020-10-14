/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const build = (preorder, inorder) => {
        if (!preorder.length || !inorder.length) {
            return null;
        }
        if (preorder.length === 1 && inorder.length === 1) {
            return new TreeNode(preorder[0]);
        }
        let root = preorder[0];
        let index = inorder.indexOf(root);

        let leftinorder = inorder.slice(0, index);
        let rightinorder = inorder.slice(index + 1);

        let leftpreorder = preorder.slice(1, leftinorder.length + 1);
        let rightpreorder = preorder.slice(leftinorder.length + 1);

        let node = new TreeNode(root);
        node.left = build(leftpreorder, leftinorder);
        node.right = build(rightpreorder, rightinorder);
        return node;
    }

    return build(preorder, inorder);
};
// @lc code=end
