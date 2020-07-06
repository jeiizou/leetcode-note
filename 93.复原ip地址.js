/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
    let res = [];
    deRead([], s, res);
    return res;
};

function deRead(curS, s, arr) {
    if (!s.length && curS.length === 4) {
        arr.push(curS.join('.'));
        return;
    }

    if (curS.length > 4 || s.length === 0) {
        return;
    }

    let i = 0;
    let str = '';
    while (s[i]) {
        str = str + s[i];

        if (str.length > 1 && str[0] === '0') {
            break;
        }

        if (+str > 255) {
            break;
        }

        i++;
        deRead([...curS, str], s.slice(i), arr);
    }
}
// @lc code=end

// console.log(restoreIpAddresses('25525511135'));
console.log(restoreIpAddresses('25525511135'));