/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;

    if (nums[max] < target) {
        return max + 1;
    }

    if (nums[min] > target) {
        return min;
    }

    while (max > min) {
        let mid = Math.floor((max + min) / 2);
        if (nums[mid] < target) {
            min = mid + 1;
        } else if (nums[mid] > target) {
            max = mid;
        } else {
            return mid;
        }
    }

    return min;
}

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));
// console.log(searchInsert([], 0));
// console.log(searchInsert([1], 0));
// console.log(searchInsert([1], 1));
// console.log(searchInsert([1], 2));
// @lc code=end

