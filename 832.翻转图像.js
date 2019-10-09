/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let B = [];
    for (let i = 0; i < A.length; i++) {
        B.push(reverseAndFlap(A[i]));
    }
    return B;
};

function reverseAndFlap(bits) {
    let res = [];
    for (let i = bits.length - 1; i >= 0; i--) {
        if (bits[i] === 1) {
            res.push(0);
        } else if (bits[i] === 0) {
            res.push(1);
        } else {
            res.push(null);
        }
    }
    return res;
}

// @lc code=end

let res = flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]);
console.log(res);
