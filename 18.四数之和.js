/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
    let i1 = 0;
    let i2 = 1;
    let i3 = 2;
    let i4 = 3;
    let res_arr = {};

    //先对数组进行排序和去重
    nums = nums.sort((a, b) => {
        return a - b;
    });

    while (true) {
        let sum = nums[i1] + nums[i2] + nums[i3] + nums[i4];
        if (sum === target) {
            res_arr[[nums[i1], nums[i2], nums[i3], nums[i4]].join(',')] = 1;
        }

        i4++;

        if (nums[i4] === undefined) {
            i3++;
            i4 = i3 + 1;
        }

        if (nums[i4] === undefined) {
            i2++;
            i3 = i2 + 1;
            i4 = i3 + 1;
        }

        if (nums[i4] === undefined) {
            i1++;
            i2 = i1 + 1;
            i3 = i2 + 1;
            i4 = i3 + 1;
        }

        if (nums[i4] === undefined) {
            return [...Object.keys(res_arr).map(k => k.split(',').map(e => parseInt(e)))];
        }
    }
};
// @lc code=end
