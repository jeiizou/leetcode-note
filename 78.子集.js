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
    for (let i = 0; i <= nums.length; i++) {
        let total = []
        combine(nums, i, [], total);
        total = total.map(i => i.split(',').filter(i => i !== '').map(i => +i));
        res.push(...total);
    }
    return res;
};

function combine(nums, k, arr = [], total = []) {
    if (arr.length >= k) {
        let arrStr = arr.join(',');
        if (total.indexOf(arrStr) === -1) {
            total.push(arrStr);
        }
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        let newArr = [...arr, nums[i]];
        combine(nums.slice(i + 1), k, newArr, total);
    }
}
// @lc code=end

console.log(subsets([0, 2, 2, 3]));
