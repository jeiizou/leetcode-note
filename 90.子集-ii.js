/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {

    nums=nums.sort();

    let arr = {};

    let iteration = (length, list, index) => {

        if (list.length >= length) {
            arr[list.join(',')] = list;
            return;
        }

        for (let i = index; i < nums.length; i++) {
            iteration(length, [...list, nums[i]], i + 1)
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        const element = nums[i];
        iteration(i, [], 0);
    }


    let res = [];
    for (const key in arr) {
        res.push(arr[key]);
    }

    return res;
};
// @lc code=end

console.log(subsetsWithDup([4,4,4,1,4]));