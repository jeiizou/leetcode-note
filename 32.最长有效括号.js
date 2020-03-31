/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let maxLength = 0;
    let i = 0;
    while (s[i]) {
        let length = getMaxLength(s.slice(i));
        if (length > maxLength) {
            maxLength = length;
        }
        i++;
    }
    return maxLength;
};

function getMaxLength(s) {
    let stack = 0;
    let i = 0;
    let maxLength = 0;
    while (s[i]) {
        if (s[i] === '(') {
            stack++;
        } else {
            stack--;
        }
        if (stack < 0) {
            return maxLength;
        } else if (stack === 0) {
            maxLength = i + 1;
        }
        i++;
    }
    return maxLength;
}

// let res = longestValidParentheses("");
// console.log(res);
// @lc code=end
