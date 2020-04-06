/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) {
        return "1";
    } else {
        let nums = countAndSay(n - 1);
        let count = "";
        let tempCount = {
            value: null,
            length: 0
        };
        for (let i = 0; i <= nums.length; i++) {
            if (tempCount.length == 0 || nums[i] === tempCount.value) {
                tempCount.value = nums[i]
                tempCount.length++;
            } else {
                count = count + tempCount.length + tempCount.value;
                tempCount = {
                    value: nums[i],
                    length: 1
                };
            }
        }
        return count;
    }
};
// @lc code=end

