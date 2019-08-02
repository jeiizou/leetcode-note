/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // let max_area = 0;
    // for (let i = 0; i < height.length; i++) {
    //     const h_i = height[i];
    //     for (let j = i + 1; j < height.length; j++) {
    //         const h_j = height[j];
    //         max_area = Math.max(max_area, (j - i) * Math.min(h_i, h_j));
    //     }
    // }

    // return max_area;

    //top rated
    let i = 0,
        j = height.length - 1,
        water = 0;

    while (i < j) {
        water = Math.max(water, Math.min(height[i], height[j]) * (j - i));

        if (height[i] < height[j]) {
            i++;
        } else if (height[i] > height[j]) {
            j--;
        } else {
            i++;
            j--;
        }
    }

    return water;
};
