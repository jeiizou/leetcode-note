/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let nature = createNatureArr(n);
    let res = step(n, k - 1, nature);
    return res;
};

function step(n, k, natures) {
    if (n === 1) {
        return natures[0];
    }
    let nAfterFact = fact(n - 1);
    let index = Math.floor(k / nAfterFact);
    let res_k = k % nAfterFact;
    let num = natures[index];
    natures.splice(index, 1);
    return '' + num + step(n - 1, res_k, natures)
}

function createNatureArr(length) {
    return new Array(length).fill('').map((i, index) => index + 1 + "");
}

function fact(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}
// @lc code=end
console.log(getPermutation(2, 1));