/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    let flag = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && flag) {
            return count
        } else if (s[i] !== ' ') {
            if (!flag) { flag = true }
            count++;
        }
    }

    return count;
};
// @lc code=end

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("a    "));