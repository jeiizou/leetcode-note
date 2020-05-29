/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    // base cases
    if (k < 1 || k < 1) {
        return [];
    }
    // 生成自然数列
    let nature = [];
    for (let i = 0; i < n; i++) {
        nature[i] = i + 1;
    }
    let allArr = [];
    getArr(nature, allArr, k);
    return allArr;
};

function getArr(list, allArr, k, cur = []) {
    for (let i = 0; i < list.length; i++) {
        let t_cur = [...cur, list[i]]
        if (t_cur.length >= k) {
            allArr.push(t_cur);
        } else {
            let resList = list.slice(i + 1)
            getArr(resList, allArr, k, t_cur);
        }
    }
}
// @lc code=end
