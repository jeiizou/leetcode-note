/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    // base cases
    if (nums.length < 1) {
        return []
    }

    if (nums.length < 2) {
        return [nums]
    }

    let resNums = [];
    generatorPermute(nums, resNums);
    return resNums.map((arr) => arr.split(',').map((i) => parseInt(i)));
};


function generatorPermute(nums, resNums, curNums = '') {
    if (nums.length === 0) {
        if (resNums.indexOf(curNums) === -1) {
            resNums.push(curNums);
        }
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        let numsStr = curNums ? curNums + `,${nums[i]}` : nums[i] + ""
        let new_arr = Array.from(nums);
        new_arr.splice(i, 1);
        generatorPermute(new_arr, resNums, numsStr)
    }
}

// @lc code=end

