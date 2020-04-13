/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let max_step = nums.length;
    // base cases
    if (max_step < 2) {
        return 0;
    }

    let cur_pos = 0;
    let jump_num = 0;
    while (cur_pos < max_step - 1) {
        let temp_max = 0;
        let i_index = cur_pos;

        for (let i = 1; i <= nums[cur_pos]; i++) {
            if (cur_pos + nums[cur_pos] >= max_step - 1) {
                jump_num++;
                return jump_num;
            }

            if (i + nums[cur_pos + i] >= temp_max) {
                temp_max = i + nums[cur_pos + i];
                i_index = cur_pos + i;
            }
        }
        cur_pos = i_index;
        jump_num++;
    }
    return jump_num;
};
// @lc code=end

console.log(jump([2,3,1,1,4]));
