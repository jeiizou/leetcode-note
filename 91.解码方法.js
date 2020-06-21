/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let count = 0;
    let liter = (c_s) => {
        if (c_s.length < 1) {
            count++;
            return;
        }

        let a_1 = c_s.slice(0, 1);
        if ((+a_1) <= 26 && (+a_1) > 0) {
            liter(c_s.slice(1));
        }

        if (c_s.length > 1) {
            let a_2 = c_s.slice(0, 2);

            if (a_2[0] === '0') {
                return;
            }

            if ((+a_2) <= 26 && (+a_2) > 0) {
                liter(c_s.slice(2));
            }
        }
    }

    liter(s);

    return count
};
// @lc code=end

console.log(numDecodings('0'));