/*
 * @lc app=leetcode.cn id=87 lang=javascript
 *
 * [87] 扰乱字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    let k = 1;

    if (s1 === s2) {
        return true;
    }

    if (s1.length < 3 && s2.length < 3) {
        if (sortStr(s1) == sortStr(s2)) {
            return true;
        } else {
            return false;
        }
    }

    while (s1[k]) {
        let r1 = s1.slice(0, k);
        let s_r1 = sortStr(r1);

        let r2 = s2.slice(0, k);
        let s_r2 = sortStr(r2);

        if (s_r1 === s_r2) {
            // console.log('对称切割')
            // console.log(r1, r2);
            // console.log(s1.slice(k), s2.slice(k));
            if (isScramble(r1, r2) && isScramble(s1.slice(k), s2.slice(k))) {
                return true;
            }
        }

        let l2 = s2.slice(-k);
        let s_l2 = sortStr(l2);

        if (s_r1 == s_l2) {
            // console.log('镜像切割')
            // console.log(r1, l2);
            // console.log(s1.slice(k), s2.slice(0, - k));
            if (isScramble(r1, l2) && isScramble(s1.slice(k), s2.slice(0, - k))) {
                return true;
            }
        }


        k++;
    }

    return false;
};

let sortStr = (s) => {
    return s.split('').sort(function (a, b) { return a.localeCompare(b) }).join('');
}
// @lc code=end

console.log(isScramble("hobobyrqd", "hbyorqdbo"))
