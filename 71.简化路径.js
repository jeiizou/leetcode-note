/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let pathArr = path.split('/');
    let resPath = [];
    for (let i = 0; i < pathArr.length; i++) {
        const name = pathArr[i];
        if (!name) {
            continue;
        } else {
            if (name === '..') {
                resPath.pop();
            } else if (name === '.') {
                continue;
            } else {
                resPath.push(name);
            }
        }
    }

    return '/' + resPath.join('/');
};
// @lc code=end

// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/../'));
// console.log(simplifyPath('/a/../../b/../c//.//'));
console.log(simplifyPath('/a//b////c/d//././/..'));