/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // let res_arr = {};
    // for (let i = 0; i < nums.length - 2; i++) {
    //     const num = nums[i];
    //     let res = twoSum(nums.slice(i + 1), -num);
    //     res.map(function(arr) {
    //         arr.push(num);
    //         arr.sort((a, b) => a - b);
    //         res_arr[arr.join(',')] = arr;
    //     });
    // }

    // let res = [];
    // for (const key in res_arr) {
    //     res.push(res_arr[key]);
    // }

    // return res;

    // function twoSum(nums, value) {
    //     let res = [];
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         let num = nums[i];
    //         let res_arr = nums.slice(i + 1);
    //         let j = res_arr.indexOf(value - num);
    //         if (~j) {
    //             res.push([num, res_arr[j]]);
    //         }
    //     }
    //     return res;
    // }

    //top rated
    var rtn = [];
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return rtn;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k; ) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};

// threeSum([-1, 0, 1, 2, -1, -4]);
