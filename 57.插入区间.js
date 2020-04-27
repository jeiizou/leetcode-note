/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    return merge(intervals);
};

var merge = function (intervals) {
    let axis = {};
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        axis[interval[0]] = axis[interval[0]] ? axis[interval[0]] - 1 : -1;
        axis[interval[1]] = axis[interval[1]] ? axis[interval[1]] + 1 : 1;
    }
    let stack = 0;
    let result = [];
    let curInterval = [];

    for (const value in axis) {
        if (axis.hasOwnProperty(value)) {
            if (stack === 0) {
                curInterval[0] = +value;
            }
            stack += axis[value];
            if (stack === 0) {
                curInterval[1] = +value;
                result.push([...curInterval]);
            }
        }
    }

    // for (let i = 0; i < axis.length; i++) {
    //     if (axis[i] !== undefined) {
    //         if (stack === 0) {
    //             curInterval[0] = i;
    //         }
    //         stack += axis[i];
    //         if (stack === 0) {
    //             curInterval[1] = i;
    //             result.push([...curInterval]);
    //         }
    //     }
    // }
    return result;
};
// @lc code=end

console.log(insert([[1, 3], [6, 9]], [2, 5]));
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));