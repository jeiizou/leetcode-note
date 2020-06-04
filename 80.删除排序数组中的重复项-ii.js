/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i1 = 0, i2 = 0;
    let stack = [];

    while (i2 < nums.length) {
        if (stack.length === 0) {
            stack.push(nums[i2]);
            nums[i1] = nums[i2]
            i1++;
            i2++;
        } else if (stack.length === 1) {
            if (nums[i2] === stack[0]) {
                stack.push(nums[i2])
            } else {
                stack[0] = nums[i2]
            }
            nums[i1] = nums[i2]
            i1++;
            i2++;
        } else if (stack.length === 2) {
            if (nums[i2] === stack[0]) {
                i2++;
            } else {
                stack = [nums[i2]];
                nums[i1] = nums[i2];
                i1++;
                i2++;
            }
        }
    }

    return i1;
};
// @lc code=end


let arr = [1,2,3];
console.log(removeDuplicates(arr), arr);