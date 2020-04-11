/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return "0"
    };
    let res = [];
    for (let i = 0; i < num2.length; i++) {
        const num = num2[i];
        res[i] = num1.split('').map(i => {
            return parseInt(i) * num
        });
    }

    let index = 0;
    let yu = 0;
    let resString = []
    let total = (num1.length - 1) + num2.length;
    while (index < total) {
        let num = yu;
        let lastIndex = num1.length - 1 - index;
        for (let j = num2.length - 1; j >= 0; j--) {
            let step = num2.length - 1 - j;
            if (res[j][lastIndex + step]) {
                num += res[j][lastIndex + step];
            }
        }
        yu = parseInt(num / 10);
        resString[total - index] = num % 10;
        index++;

        if (index == total && yu > 0) {
            resString.unshift(yu);
        }
    }
    return resString.join('');
};

// console.log(multiply('123456', '123456'));
// @lc code=end

