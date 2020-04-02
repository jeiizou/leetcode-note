/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;
    if (max < 0) {
        return [-1, -1];
    }

    while (max >= min) {
        let middle = Math.floor((max + min) / 2);
        console.log(middle);

        if (nums[middle] > target) {
            max = middle - 1;
        } else if (nums[middle] < target) {
            min = middle + 1;
        } else {
            let left = middle;
            let right = middle;
            while (left >= min) {
                if (nums[left] < nums[middle]) {
                    break;
                } else {
                    left--;
                }
            }
            left++

            while (right <= max) {
                if (nums[right] > nums[middle]) {
                    break;
                } else {
                    right++;
                }
            }
            right--
            console.log(right,left);
            return [left, right];
        }
    }

    return [-1, -1];
};
// @lc code=end

