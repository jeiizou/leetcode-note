/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let local_candidates = candidates.sort((a, b) => a - b).filter(i => i <= target);
    let res = [];
    getResolve(target, local_candidates, res);
    return res;

}

function getResolve(target, candidates, res, cur = { list: [], total: 0 }, curIndex = 0) {
    for (let i = curIndex; i < candidates.length; i++) {
        const number = candidates[i];
        let value = cur.total + number;
        let arr = [...cur.list, number].sort((a, b) => a - b);
        if (value === target) {
            if (!hadedArr(arr, res)) {
                res.push(arr);
            }
            return;
        } else if (value > target) {
            return;
        } else {
            getResolve(target, candidates, res, { list: arr, total: value }, i + 1);
        }
    }
}

function hadedArr(arr, lists) {
    for (let i = 0; i < lists.length; i++) {
        if (JSON.stringify(arr) === JSON.stringify(lists[i])) {
            return true;
        }
    }

    return false;
}

// console.log(combinationSum2([1, 2, 3, 4, 5, 6, 7, 8], 6));
// @lc code=end

