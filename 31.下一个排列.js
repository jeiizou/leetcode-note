/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let lastIndex = nums.length - 1;
    while (true) {
        if (lastIndex < 0) {
            nums = nums.sort((a, b) => a - b);
            return;
        }

        let tailArr = nums.slice(lastIndex);
        if (!isMaxArr(tailArr)) {
            reset(lastIndex, nums);
            return;
        } else {
            lastIndex--;
        }
    }
};


function isMaxArr(arr) {
    let maxArr = Array.from(arr);
    maxArr.sort((a, b) => b - a);
    if (arr.join() === maxArr.join()) {
        // console.log(arr, 'isMax')
        return true;
    } else {
        // console.log(arr, 'notMax')
        return false;
    }
}

function reset(index, num) {
    // change
    let changeIndex = findIndex(index, num);
    let temp = num[index];
    num[index] = num[changeIndex];
    num[changeIndex] = temp;
    // sort
    let res = num.splice(index + 1, num.length - index - 1);
    res.sort((a, b) => a - b);
    num.push(...res);
    return;
}

function findIndex(index, num) {
    let baseNum = num[index];
    let min = Infinity;
    let resIndex = -1;
    for (let i = index + 1; i < num.length; i++) {
        console.log(baseNum, num[i]);
        if (num[i] > baseNum && num[i] < min) {
            min = num[i];
            resIndex = i;
        }
    }
    return resIndex;
}

// let nums = [4,2,0,2,3,2,0];
// nextPermutation(nums)
// console.log(nums);
// console.log(nextPermutation([3, 2, 1]));
// console.log(nextPermutation([1, 1, 5]));
// console.log(nextPermutation([]));
// @lc code=end

