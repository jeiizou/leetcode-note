/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // base case
    if (s.length < 1) {
        return false;
    }

    // trim
    s = s.replace(/^\s+|\s+$/gm, '')

    let length = 0;
    for (let i = 0; i < s.length; i++) {
        const num = s[i];
        length++;
        switch (num) {
            case (num.match(/[0-9]/) || {}).input:
                break;
            case '.':
            case 'e':
            case '+':
            case '-':
            default:
                return false
        }
    }

    if (length === 0) {
        return false;
    }

    return true;
};

/**
 * 是否为整数
 */
function isInt(str) {
    if (str.match(/[0-9]/)) {
        return true
    } else {
        return false
    }
}

function dealNumber(str, opt = {
    allowEmpty: true, //是否允许为空
    allowDec: true, // 是否允许小数点
    allowE: true,  // 是否允许指数E
    allowSign: true, // 是否允许符号
}) {

}
// @lc code=end

// console.log(isNumber("01212"));
// console.log(isNumber(" 0.1 "));
// console.log(isNumber("abc"));
// console.log(isNumber("1 a"));
// console.log(isNumber("2e10"));
// console.log(isNumber(" -90e3   "));
// console.log(isNumber(" 1e"));
// console.log(isNumber("e3"));
// console.log(isNumber(" 6e-1"));
// console.log(isNumber(" 99e2.5-1"));
// console.log(isNumber("53.5e93"));
// console.log(isNumber(" --6 "));
// console.log(isNumber("-+3"));
// console.log(isNumber("95a54e53"));
// console.log(isNumber("   "));

// console.log(isNumber(".1"));
// console.log(isNumber("3."));
// console.log(isNumber("3.1"));
// console.log(isNumber("1 "));

// console.log(isNumber("1 4"));
// console.log(isNumber("."));
// console.log(isNumber("   "));
// console.log(isNumber("95a54e53"));
// console.log(isNumber(" --6 "));
// console.log(isNumber("-+3"));

console.log(isNumber("11.8e1"));