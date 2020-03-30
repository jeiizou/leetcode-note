/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {

    if (!words || !words.length || !s || !s.length) {
        return [];
    }

    let wordLength = words[0].length;
    let wordNum = words.length;

    let totalLength = wordLength * wordNum;

    let res = [];
    let buffer = [];

    for (let i = 0; i < s.length; i++) {
        buffer.push(s[i]);
        if (buffer.length >= totalLength) {
            if (isSatifiy(buffer, words)) {
                res.push(i - totalLength + 1);
            }
            buffer.shift();
        }
    }

    return res;
};


function isSatifiy(buffer, words) {
    let newWord = Array.from(words);
    let wordLength = words[0].length;

    for (let i = 0; i < buffer.length; i += wordLength) {
        let curString = buffer.slice(i, i + wordLength).join('');
        let index = newWord.indexOf(curString);
        if (index === -1) {
            return false;
        } else {
            newWord.splice(index, 1);
        }
    }
    return true
}
// @lc code=end

