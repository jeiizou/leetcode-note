/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let s_length = s.length;
    let sub_s_index = 0;

    while (s_length >= 1) {
        while (sub_s_index + s_length <= s.length) {
            let pal_str = s.substr(sub_s_index, s_length);
            if (isPalindrome(pal_str)) {
                return pal_str;
            } else {
                sub_s_index++;
            }
        }

        s_length--;
        sub_s_index = 0;
    }

    return '';
};

//判断回文
isPalindrome = function(str) {
    while (str.length >= 0) {
        if (str.length <= 1) return true;

        if (str[0] === str[str.length - 1]) {
            str = str.slice(1, -1);
        } else {
            return false;
        }
    }

    return false;
};
