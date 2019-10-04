/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let totalDistance = 0;
    let zero;
    let size = nums.length;
    let hamming = [];
    while (true) {
        zero = 0;
        hamming = [0, 0];
        for (let i = 0; i < size; i++) {
            if (nums[i] === 0) {
                zero++;
            }
            hamming[nums[i] % 2]++;
            nums[i] >>= 1;
        }
        totalDistance += hamming[0] * hamming[1];
        if (zero === size) {
            return totalDistance;
        }
    }
};

// let res = totalHammingDistance([4, 14, 2]);
// console.log(res);
// @lc code=end
