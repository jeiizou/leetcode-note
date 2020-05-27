/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let t = 0;
    let w = nums.length - 1;
    let cur = 0;
    while (cur <= w) {
        if (nums[cur] === 0) {
            swap(t, cur, nums);
            t++;
            cur++;
        } else if (nums[cur] === 2) {
            swap(w, cur, nums);
            w--;
        } else {
            cur++
        }
    }
};

function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
// @lc code=end

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums)
console.log(nums);