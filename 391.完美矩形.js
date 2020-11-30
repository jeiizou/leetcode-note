/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
    let bl = [Infinity, Infinity], tr = [0, 0];

    let map = {};
    let count = 0;

    for (let index = 0; index < rectangles.length; index++) {
        const rect = rectangles[index];

        // 确定最大包围盒
        bl[0] = Math.min(rect[0], bl[0])
        bl[1] = Math.min(rect[1], bl[1])
        tr[0] = Math.max(rect[2], tr[0])
        tr[1] = Math.max(rect[3], tr[1])

        // 确定重叠
        count += (rect[2] - rect[0]) * (rect[3] - rect[1]);

        let keys = [
            `${rect[0]}-${rect[1]}`,
            `${rect[2]}-${rect[3]}`,
            `${rect[0]}-${rect[3]}`,
            `${rect[2]}-${rect[1]}`,
        ]

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (map[key]) {
                map[key] = false;
            } else {
                map[key] = true;
            }
        }
    }

    // console.log(map, bl, tr);
    let keys = [
        `${bl[0]}-${bl[1]}`,
        `${tr[0]}-${tr[1]}`,
        `${bl[0]}-${tr[1]}`,
        `${tr[0]}-${bl[1]}`,
    ]

    for (const key in map) {
        if (map.hasOwnProperty(key)) {
            const value = map[key];

            if (keys.indexOf(key) !== -1) {
                if (!value) return false;
            } else {
                if (value) return false;
            }
        }
    }

    // 确定缺失
    if (count !== (tr[1] - bl[1]) * (tr[0] - bl[0])) {
        return false
    } else {
        return true
    }
};
// @lc code=end

console.log(isRectangleCover([
    [1, 1, 3, 3],
    [3, 1, 4, 2],
    [3, 2, 4, 4],
    [1, 3, 2, 4],
    [2, 3, 3, 4]
]))

console.log(isRectangleCover([
    [1, 1, 2, 3],
    [1, 3, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 4, 4]
]))

console.log(isRectangleCover([
    [1, 1, 3, 3],
    [3, 1, 4, 2],
    [1, 3, 2, 4],
    [3, 2, 4, 4]
]))