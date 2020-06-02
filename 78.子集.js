/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(...combine(nums, i));
    }
    return res;
};

function combine(nums, k, arr = [], total = []) {
    if (arr.length > k) {
        total.push(arr);
        return total;
    }

    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i])
        combine(nums.slice(i), k, arr, total);
    }

    return total;
}
// @lc code=end


console.log(subsets([1, 2, 3]));
