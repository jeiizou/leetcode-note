/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let m = [];
    for (let i = 0; i <= word1.length; i++) {
        m[i] = new Array(word2.length + 1).fill(-1);
        if (i === 0) {
            m[i] = m[i].map((i, index) => index);
        } else {
            m[i][0] = i;
        }
    }
    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            let d = 0;
            if (word1[i - 1] == word2[j - 1]) {
                d = 0
            } else {
                d = 1
            }
            m[i][j] = Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1, m[i - 1][j - 1] + d);
        }
    }
    return m[word1.length][word2.length];
};
// @lc code=end

console.log(minDistance('intention', 'execution'));