/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {

    if (s.length < t.length) {
        return ""
    }

    let t_hash = {};
    for (let i = 0; i < t.length; i++) {
        t_hash[t[i]] ? t_hash[t[i]]++ : t_hash[t[i]] = 1;
    }

    let c_hash = {};

    let index_1 = 0;
    let index_2 = 0;

    let minStr = "";
    let minlength = s.length + 1;

    while (index_2 <= s.length) {
        let curStr = s.slice(index_1, index_2);
        if (isInclude(c_hash, t_hash)) {
            if (curStr.length < minlength) {
                minStr = curStr;
                minlength = curStr.length;
            }
            if (curStr.length === t.length) {
                return curStr;
            }
            c_hash[s[index_1]] ? c_hash[s[index_1]]-- : c_hash[s[index_1]] = 1;
            index_1++;
        } else {
            c_hash[s[index_2]] ? c_hash[s[index_2]]++ : c_hash[s[index_2]] = 1;
            index_2++;
        }
    }
    return minStr;
};

function isInclude(c_hash, t_hash) {
    for (const key in t_hash) {
        if (!c_hash[key] || t_hash[key] > c_hash[key]) {
            return false;
        }
    }
    return true;
}
// @lc code=end


console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('aa', 'a'));
console.log(minWindow('a', 'aa'));
console.log(minWindow('a', 'b'));
console.log(minWindow('abc', 'ac'));