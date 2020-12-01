/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function (words, puzzles) {
    let res = new Array(puzzles.length).fill(0);
    const word2mode = (word) => {
        let str = new Array(26).fill(0)
        for (let i = 0; i < word.length; i++) {
            str[word[i].charCodeAt() - 97] = 1;
        }
        return +('0b' + str.join(''));
    }
    let wordMap = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let mode = word2mode(word);
        wordMap[mode] ? wordMap[mode].count += 1 : wordMap[mode] = {
            w: word,
            count: 1
        };
    }
    for (let i = 0; i < puzzles.length; i++) {
        const puzzle = puzzles[i];
        mode = word2mode(puzzle);

        for (let k = mode; k; k = (k - 1) & mode) {
            if (wordMap[k] && wordMap[k].w.indexOf(puzzle[0]) !== -1) {
                res[i] += wordMap[k].count;
            }
        }
    }

    return res;
};
// @lc code=end

console.log(findNumOfValidWords(
    ["apple", "pleas", "please"],
    ["aelwxyz", "aelpxyz", "aelpsxy", "saelpxy", "xaelpsy"]
))
