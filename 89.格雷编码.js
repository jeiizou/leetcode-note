/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    if (n === 0) {
        return [0]
    }

    let start = '0'.repeat(n);
    let arr = [start]

    let geneArr = (curArr) => {
        if (curArr.length >= (2 ** n)) {
            return curArr.map(i => parseInt(i, 2));
        }

        let tempStr = curArr[curArr.length - 1];
        for (let i = 0; i < tempStr.length; i++) {
            let sitbyte = tempStr[i] == '0' ? '1' : '0';
            let newStr = tempStr.slice(0, i) + sitbyte + tempStr.slice(i + 1)
            if (curArr.indexOf(newStr) === -1) {
                return geneArr([...curArr, newStr]);
            }
        }
    }


    return geneArr(arr);
};
// @lc code=end

console.log(grayCode(4));