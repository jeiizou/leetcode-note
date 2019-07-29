/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let t_nums = nums1.concat(nums2).sort((a, b) => {
        return a - b;
    });

    let t_length = t_nums.length;

    if (t_length % 2) {
        return t_nums[(t_length - 1) / 2];
    } else {
        return (t_nums[t_length / 2] + t_nums[t_length / 2 - 1]) / 2;
    }
};
