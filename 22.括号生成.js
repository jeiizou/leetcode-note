/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
    let stack = [];
    let root = {
        str: "(",
        value: 1,
        path: "(",
        left: null,
        right: null
    }
    root.left = getLeaf("(", root, 2, n * 2, stack);
    root.right = getLeaf(")", root, 2, n * 2, stack);
    return stack;
};

function getLeaf(type, root, d, td, stack) {
    if (d > td) {
        // console.log(root);
        if (root.value === 0) {
            let index = stack.indexOf(root.path);
            if (index === -1) {
                stack.push(root.path);
            };
        }
        return null;
    }

    let node = {
        str: type,
        value: root.value,
        path: root.path + type,
        left: null,
        right: null,
    }

    if (type === "(") {
        //left
        node.value = root.value + 1;
        node.left = getLeaf("(", node, d + 1, td, stack);
        node.right = getLeaf(")", node, d + 1, td, stack);
    } else {
        //right
        if (root.value < 1) {
            return null;
        } else {
            node.value = root.value - 1;
            node.left = getLeaf("(", node, d + 1, td, stack);
            node.right = getLeaf(")", node, d + 1, td, stack);
        }
    }
    return node;
}
// @lc code=end
