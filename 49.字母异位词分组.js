/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let strMap = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let str_key = str.split('').sort((a, b) => { return a.localeCompare(b) }).join('');
        if (strMap[str_key]) {
            strMap[str_key].push(str)
        } else {
            strMap[str_key] = [str]
        }
    }

    let res = [];
    for (const key in strMap) {
        if (strMap.hasOwnProperty(key)) {
            res.push(strMap[key]);
        }
    }

    return res;
};
// @lc code=end

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

