/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let local_candidates = candidates.sort((a, b) => a - b).filter(i => i <= target);
    let res = [];
    getResolve(target, local_candidates, res);
    return res;
};


function getResolve(target, candidates, res, cur = { list: [], total: 0 }, curIndex = 0) {
    for (let i = curIndex; i < candidates.length; i++) {
        const number = candidates[i];
        let value = cur.total + number;
        let arr = [...cur.list, number].sort((a, b) => a - b);
        if (value === target) {
            res.push(arr);
            return;
        } else if (value > target) {
            return;
        } else {
            getResolve(target, candidates, res, { list: arr, total: value }, i);
        }
    }
}

// console.log(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));
// console.log(combinationSum([2, 3, 5], 8));
// @lc code=end

// [
//     [3, 3, 3, 3, 3], [3, 3, 3, 6],
//     [3, 3, 4, 5], [3, 3, 9],
//     [3, 4, 4, 4], [3, 4, 8],
//     [3, 5, 7], [3, 6, 6],
//     [3, 12], [4, 4, 7],
//     [4, 5, 6], [4, 11],
//     [5, 5, 5], [6, 9],
//     [7, 8]
// ]