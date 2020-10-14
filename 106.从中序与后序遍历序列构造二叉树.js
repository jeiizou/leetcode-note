/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const build = (inorder, postorder) => {
        if (!postorder.length || !inorder.length) {
            return null;
        }
        if (postorder.length === 1 && inorder.length === 1) {
            return new TreeNode(postorder[0]);
        }
        let root = postorder[postorder.length - 1];
        let index = inorder.indexOf(root);

        let leftinorder = inorder.slice(0, index);
        let rightinorder = inorder.slice(index + 1);

        let leftpostorder = postorder.slice(0, leftinorder.length);
        let rightpostorder = postorder.slice(leftinorder.length, postorder.length - 1);

        let node = new TreeNode(root);
        node.left = build(leftinorder, leftpostorder);
        node.right = build(rightinorder, rightpostorder);
        return node;
    }

    return build(inorder, postorder);
};
// @lc code=end

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));