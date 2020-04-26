/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let axis = [];
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        axis[interval[0]] = axis[interval[0]] ? axis[interval[0]] - 1 : -1;
        axis[interval[1]] = axis[interval[1]] ? axis[interval[1]] + 1 : 1;
    }
    let stack = 0;
    let result = [];
    let curInterval = [];
    for (let i = 0; i < axis.length; i++) {
        if (axis[i] !== undefined) {
            if (stack === 0) {
                curInterval[0] = i;
            }
            stack += axis[i];
            if (stack === 0) {
                curInterval[1] = i;
                result.push([...curInterval]);
            }
        }
    }
    return result;
};
// @lc code=end

console.log(merge([[1, 4], [1, 5]]))
console.log(merge([[1, 4], [4, 5]]))
console.log(merge([[1, 4], [0, 0]]))
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))