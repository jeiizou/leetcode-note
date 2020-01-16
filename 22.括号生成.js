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
    let count = n * 2;

    let i = 0;
    while (i < count) {

    }

};

function bracketGenTree(node, stack, i, n) {
    if (i > n) {
        if (stack.length < 1) {
            return node;
        } else {
            return false;
        }
    }

    if (node === ")") {
        if (stack > 0) {
            stack--;
        } else {
            return false;
        }
    } else if (node === "(") {
        stack++;
    }

    node.left = bracketGenTree(')', stack, i + 1, n);
    node.right = bracketGenTree('(', stack, i + 1, n);

    return node;
}
// @lc code=end
