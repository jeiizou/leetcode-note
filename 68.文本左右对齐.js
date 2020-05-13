/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let stack = {
        words: [],
        length: 0
    }
    let resWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // 先进行判断
        if (stack.length + word.length + stack.words.length - 1 >= maxWidth) {
            let res = maxWidth - stack.length;
            let resLine = ''
            if (stack.words.length < 2) {
                 // 对单独的长单词进行特殊处理
                resLine = stack.words[0] + (new Array(res)).fill(' ').join('');
            } else {
                // 对一般情况进行分割
                let aver = parseInt(res / (stack.words.length - 1));
                let aver_y = res % (stack.words.length - 1);
                for (let j = 0; j < stack.words.length; j++) {
                    resLine += stack.words[j];
                    if (j < stack.words.length - 1) {
                        resLine += (new Array(aver)).fill(' ').join('');
                    }
                    if (aver_y > 0) {
                        resLine += " "
                        aver_y--;
                    }
                }

            }
            // 重置line
            resWords.push(resLine);
            stack = {
                words: [],
                length: 0
            }
        }
        stack.words.push(word);
        stack.length += word.length;
    }
    // 处理最后一行
    let curLine = '';
    for (let k = 0; k < stack.words.length; k++) {
        const word = stack.words[k];
        curLine += word;
        if (k < stack.words.length - 1) {
            curLine += ' '
        } else {
            let resLength = maxWidth - curLine.length;
            if (resLength > 0) {
                curLine += (new Array(resLength)).fill(' ').join('');
            }
        }
    }
    resWords.push(curLine);
    return resWords;
};
// @lc code=end

let words = ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
    "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"]
let maxWidth = 20

console.log(fullJustify(words, maxWidth));