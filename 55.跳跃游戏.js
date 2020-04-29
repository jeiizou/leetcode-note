/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let n = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= n) {
            n = 1;
        } else {
            n++;
        }
        if (i == 0 && n > 1) {
            return false
        }
    }
    return true;
};


function jumpTry(nums, index = 0) {
    let canJump = nums[index];
    if (canJump + index >= nums.length - 1) {
        return true;
    }
    for (let i = 1; i <= canJump; i++) {
        let res = jumpTry(nums, index + i);
        if (res) {
            return res;
        }
    }
    return false
}
// @lc code=end

