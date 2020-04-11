/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//     let total = height.reduce((a, b) => a + b, 0);
//     let resNumber = 0;
//     while (total > 0) {
//         let startIndex = -1;
//         let tempNumber = 0;
//         for (let i = 0; i < height.length; i++) {
//             if (height[i] > 0 && startIndex === -1) {
//                 startIndex = i;
//             } else if (height[i] === 0 && startIndex !== -1) {
//                 tempNumber++;
//             } else if (height[i] > 0 && startIndex !== -1) {
//                 resNumber += tempNumber;
//                 startIndex = i;
//                 tempNumber = 0;
//             }
//             if (height[i] > 0) {
//                 height[i]--;
//                 total--;
//             }

//         }
//     }
//     return resNumber;
// };

var trap = function (height) {
    if (height.length < 3) return 0
    let count = 0,
        left = 0,
        right = height.length - 1,
        leftMax = 0,
        rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                count += leftMax - height[left];
            }
            left++
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                count += rightMax - height[right];
            }
            right--
        }
    }
    return count;
};
// @lc code=end

