/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let arr_length = 0;
    for (let i = 0; i < nums.length; i++) {
        let had_arr = nums.slice(0, arr_length);
        if (had_arr.indexOf(nums[i]) === -1) {
            nums[arr_length] = nums[i];
            arr_length++;
        }
    };

    return arr_length;
};

// let arr = [1, 1, 2, 2, 3, 4, 5, 5]
// let res = removeDuplicates(arr);
// console.log(arr, res);
// @lc code=end

