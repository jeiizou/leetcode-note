/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let res = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        res = Math.max(res, sum);
        // console.log(`${num}\t${sum}\t${res}`);
    }
    // console.log(res);
    return res;
};
// @lc code=end


maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
