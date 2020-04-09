/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let numArr = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num > 0) {
            numArr[num - 1] = true;
        }
    }

    for (let i = 0; i < numArr.length; i++) {
        const element = numArr[i];
        if (!element) {
            return i + 1
        }
    }

    return numArr.length + 1
};

// console.log(firstMissingPositive([3, 4, -1, 1]))
// @lc code=end

