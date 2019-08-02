/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var lenS = s.length;
    var lenP = p.length;
    var map = {};

    return check(0, 0);

    function check(idxS, idxP) {
        //记忆保存的结果
        if (map[idxS + ':' + idxP] !== undefined) return map[idxS + ':' + idxP];
        //返回条件
        if (idxS > lenS) return false;
        if (idxS === lenS && idxP === lenP) return true;

        if (p[idxP] === '.' || p[idxP] === s[idxS]) {
            let res;
            if (p[idxP + 1] === '*') {
                res = check(idxS + 1, idxP) || check(idxS, idxP + 2);
            } else {
                res = check(idxS + 1, idxP + 1);
            }

            map[idxS + ':' + idxP] = res;
        } else {
            map[idxS + ':' + idxP] = p[idxP + 1] === '*' ? check(idxS, idxP + 2) : false;
        }
        return map[idxS + ':' + idxP];
    }
};

console.log(isMatch('aaa', 'a*a'));
