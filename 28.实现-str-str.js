/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) {
        return 0;
    }
    let strLength = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        const ele = haystack[i];
        if (ele === needle[0] && haystack.slice(i, i + strLength) === needle) {
            return i;
        }
    }
    return -1;
};

// @lc code=end

