/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    // 超时
    // let i = 0, j = 0, l = 0;

    // while (s3[l]) {
    //     // 开分支
    //     if (s1[i] === s3[l] && s2[j] === s3[l]) {
    //         return isInterleave(s1.slice(i + 1), s2.slice(j), s3.slice(l + 1)) || isInterleave(s1.slice(i), s2.slice(j + 1), s3.slice(l + 1))
    //     } else if (s1[i] === s3[l]) {
    //         i++;
    //         l++;
    //     } else if (s2[j] === s3[l]) {
    //         j++;
    //         l++;
    //     } else {
    //         return false;
    //     }
    // }

    // if (i === s1.length && j === s2.length) {
    //     return true;
    // } else {
    //     return false;
    // }

    let memo = {};

    let is_Interleave = (s1, i, s2, j, s3, k) => {
        if (i == s1.length) {
            return s2.slice(j) === s3.slice(k)
        }
        if (j == s2.length) {
            return s1.slice(i) === s3.slice(k)
        }
        let key = `${i},${j}`;
        // console.log(key);
        if (memo[key] !== undefined) {
            return memo[key] === 1
        }


        let ans = false;
        if ((s3[k] === s1[i] && is_Interleave(s1, i + 1, s2, j, s3, k + 1)) || (s3[k] === s2[j] && is_Interleave(s1, i, s2, j + 1, s3, k + 1))) {
            ans = true;
        }
        memo[key] = ans ? 1 : 0
        return ans;
    }
    // console.log(memo);
    return is_Interleave(s1, 0, s2, 0, s3, 0);
};
// @lc code=end

// console.log(isInterleave('bbbbbabbbbabaababaaaabbababbaaabbabbaaabaaaaababbbababbbbbabbbbababbabaabababbbaabababababbbaaababaa', 'babaaaabbababbbabbbbaabaabbaabbbbaabaaabaababaaaabaaabbaaabaaaabaabaabbbbbbbbbbbabaaabbababbabbabaab', 'babbbabbbaaabbababbbbababaabbabaabaaabbbbabbbaaabbbaaaaabbbbaabbaaabababbaaaaaabababbababaababbababbbababbbbaaaabaabbabbaaaaabbabbaaaabbbaabaaabaababaababbaaabbbbbabbbbaabbabaabbbbabaaabbababbabbabbab'));
// console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'));

