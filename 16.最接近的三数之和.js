/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let x = 0;
    let y = x + 1;
    let z = y + 1;
    let min = Infinity;
    let sum = undefined;
    while (true) {
        let distance = Math.abs(nums[x] + nums[y] + nums[z] - target);
        if (distance === 0) {
            return target;
        }
        if (distance < min) {
            sum = nums[x] + nums[y] + nums[z];
            min = distance;
        }

        if (nums[++z] === undefined) {
            y++;
            z = y + 1;
        }

        if (nums[y + 1] === undefined) {
            x++;
            y = x + 1;
            z = y + 1;
        }

        if (nums[x + 2] === undefined) {
            return sum;
        }
    }
};
