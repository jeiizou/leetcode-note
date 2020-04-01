/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (!nums.length) {
        return -1;
    }
    let max = nums.length - 1;
    let min = 0;
    while (max >= min) {
        let mid = Math.floor((max + min) / 2);
        // 若相等, 直接输出
        if (nums[mid] === target) {
            return mid;
        }
        // max-min相邻的情况下, mid一般直接去min, 此时需要额外判断下max的情况
        if (max === min + 1) {
            if (nums[max] === target) {
                return max;
            }
        }
        // 如果第一项直接相等, 也需要特殊判断  
        if (nums[0] === target) {
            return 0;
        }
        /**
         *    |
         * -------|-------
         */
        if (nums[mid] > nums[0]) {
            if (target > nums[mid]) {
                min = mid + 1;
            } else {
                if (target > nums[0]) {
                    max = mid - 1;
                } else {
                    min = mid + 1;
                }
            }
        }
        /**
         *            |
         * -------|-------
         */
        else {
            if (target < nums[mid]) {
                max = mid - 1;
            } else {
                if (target > nums[0]) {
                    max = mid - 1;
                } else {
                    min = mid + 1;
                }
            }
        }
    }

    return -1;
};
// @lc code=end

