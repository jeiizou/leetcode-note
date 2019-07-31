/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //1. 解释p, 对p进行分组
    let regexp_group = [];
    let x = 0;
    while (p[x]) {
        if (p[x] === '*') {
            //* 匹配0或多个前一位元素
            if (x - 1 < 0) return false;
            if (p[x - 1].charCodeAt() > 96 && p[x - 1].charCodeAt() < 123) {
                regexp_group.pop();
                regexp_group.push({
                    value: p[x - 1],
                    r_num: false, //对数量无要求
                    r_val: true //对值有要求
                });
            } else if (p[x - 1] === '.') {
                regexp_group.pop();
                regexp_group.push({
                    value: p[x - 1],
                    r_num: false, //对数量无要求
                    r_val: false //对值无要求
                });
            }
        } else if (p[x] === '.') {
            //. 匹配任意一个元素
            regexp_group.push({
                value: p[x - 1],
                r_num: true, //对数量有要求
                r_val: false //对值无要求
            });
        } else if (p[x].charCodeAt() > 96 && p[x].charCodeAt() < 123) {
            regexp_group.push({
                value: p[x],
                r_num: true, //对数量有要求
                r_val: true //对值有要求
            });
        } else {
            return false;
        }

        x++;
    }

    console.log(regexp_group);

    //2. 依据分组对s进行解析, 返回解析的结果
    if (!regexp_group.length) return false;
    let y = 0;
    let z = 0;

    while (regexp_group[z]) {
        const regexp = regexp_group[z];
        if (s[y]) {
            if (regexp.r_val) {
                if (regexp.r_num) {
                    if (s[y] === regexp.value) {
                        y++;
                        z++;
                    } else {
                        return false;
                    }
                } else {
                    while (s[y] === regexp.value) {
                        y++;
                    }
                    z++;
                }
            } else {
                if (regexp.r_num) {
                    y++;
                    z++;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    if (y === s.length - 1 && z === regexp_group.length - 1) {
        return true;
    } else {
        return false;
    }
};

console.log(isMatch('aa', 'aa'));
