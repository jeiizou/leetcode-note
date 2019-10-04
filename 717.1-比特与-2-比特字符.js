/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;

    if (bits.length === 1 && bits[0] === 1) {
        return false;
    }

    while (bits[i + 1] !== undefined) {
        if (bits[i]) {
            i += 2;
        } else {
            i++;
        }
    }

    return bits[i] !== undefined;
};
// @lc code=end
