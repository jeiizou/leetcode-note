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
    let local_candidates = candidates.sort().filter(i => i <= target);
    let res = [];
    getResolve(target, local_candidates, res);
    return res;
};


function getResolve(target, candidates, res, cur = { list: [], total: 0 }, curIndex = 0) {
    for (let i = curIndex; i < candidates.length; i++) {
        const number = candidates[i];
        let value = cur.total + number;
        let arr = [...cur.list, number].sort();
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

// console.log(combinationSum([2, 3, 6, 7], 7));
// console.log(combinationSum([2, 3, 5], 8));
// @lc code=end

