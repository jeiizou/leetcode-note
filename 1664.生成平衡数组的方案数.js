/*
 * @lc app=leetcode.cn id=1664 lang=javascript
 *
 * [1664] 生成平衡数组的方案数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    let count = 0;

    let odd = 0; // 奇数和
    let even = 0; // 偶数和
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (i % 2) {
            even += num;
        } else {
            odd += num;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let last_num = i > 0 ? nums[i - 1] : 0
        if (i % 2) {
            // 删除偶数位
            even = even - nums[i] + last_num;
        } else {
            // 删除奇数位
            odd = odd - nums[i] + last_num;
        }
        if (even === odd) {
            count++;
        }
    }

    return count;
};
// @lc code=end


console.log(waysToMakeFair([2, 1, 6, 4]))
console.log(waysToMakeFair([1,1,1]))
console.log(waysToMakeFair([1,2,3]))
