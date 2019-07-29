/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let res_str = '';
    let max_length = 0;

    while (s[i]) {
        let index = res_str.indexOf(s[i]);
        if (index === -1) {
            res_str += s[i];
        } else {
            max_length = Math.max(res_str.length, max_length);
            res_str = res_str.slice(index + 1) + s[i];
        }
        i++;
    }

    return Math.max(res_str.length, max_length);
};
