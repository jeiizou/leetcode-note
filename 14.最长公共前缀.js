/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.07%)
 * Total Accepted:    53.6K
 * Total Submissions: 167K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let flag = true;
    let i = 0;
    let str = [];
    while (flag) {
        if (!strs[0]) {
            return '';
        }
        let char = strs[0][i];
        if (!char) {
            flag = false;
        }

        strs.forEach(str => {
            if (str[i] !== char) {
                flag = false;
            }
        });

        if (flag) {
            str.push(char);
        }
        i++;
    }
    return str.join('') + '';
};

// longestCommonPrefix(['12312323', '123123', '123123']);
