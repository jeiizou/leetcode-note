/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let sorted = nums
        .map(i => i.toString())
        .sort((s1, s2) => {
            if (parseInt(s1 + s2) >= parseInt(s2 + s1)) {
                return -1;
            } else {
                return 1;
            }
        });

    return sorted[0] === '0' || !sorted[0] ? '0' : sorted.join('');
};

// let res = largestNumber([0, 123]);
// console.log(res);
// @lc code=end
