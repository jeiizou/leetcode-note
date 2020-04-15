/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
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

console.log(permuteUnique([1, 1, 2]));

