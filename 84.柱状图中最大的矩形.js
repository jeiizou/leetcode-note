/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // 解法1 
    // let maxArea = 0;
    // let height = 1;
    // while (true) {
    //     let maxLength = 0;
    //     let l = 0, r = 0;
    //     for (let i = 0; i < heights.length; i++) {
    //         const col = heights[i];
    //         let val = col - height;
    //         if (val >= 0) {
    //             r++;
    //             maxLength = Math.max(r - l, maxLength);
    //         } else {
    //             r = i;
    //             l = i;
    //         }
    //     }
    //     maxArea = Math.max(maxArea, maxLength * height);
    //     height++;
    //     if (maxLength === 0) {
    //         break;
    //     }
    // }
    // return maxArea;
    // 解法2
    // return largestArea(heights, 0);


    // 解法3
    function calcArea(start, end) {
        if (start > end) {
            return 0;
        }
        // 找到最小值
        var minIndex = start;
        for (var i = start; i <= end; i++) {
            if (heights[minIndex] > heights[i]) {
                minIndex = i;
            }
        }
        // 左边和右边
        return Math.max(heights[minIndex] * (end - start + 1), Math.max(calcArea(start, minIndex - 1), calcArea(minIndex + 1, end)));
    }
    return calcArea(0, heights.length - 1);
};

function largestArea(heights, curHeight) {
    let baseArea = heights.length * curHeight;
    let res = [];
    let index = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] - curHeight <= 0) {
            if (index < i) {
                res.push(heights.slice(index, i));
            }
            index = i + 1;
        }
    }
    if (index < heights.length) {
        res.push(heights.slice(index));
    }
    for (let j = 0; j < res.length; j++) {
        if (res[j].length < 2) {
            if (res[j] > baseArea) {
                baseArea = res[j]
            }
            continue;
        }

        let resArea = largestArea(res[j], curHeight + 1);
        if (resArea > baseArea) {
            baseArea = resArea;
        }
    }
    return baseArea;
}
// @lc code=end