/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (!triangle.length) {
        return 0;
    }

    const readRow = (index, step, min) => {
        if (!step.length) {
            return readRow(index + 1, triangle[index], triangle[index][0]);
        }
        if (!triangle[index]) {
            return min;
        }

        let nextStep = [];
        let minStep = Infinity;
        for (let i = 0; i < triangle[index].length; i++) {
            const ele = triangle[index][i];

            let leftChild = step[i - 1] !== undefined ? step[i - 1] : Infinity;
            let rightChild = step[i] !== undefined ? step[i] : Infinity;
            nextStep[i] = Math.min(leftChild, rightChild) + ele;
            if (nextStep[i] < minStep) {
                minStep = nextStep[i]
            }
        }
        return readRow(index + 1, nextStep, minStep);
    }

    return readRow(0, [], 0);
};
// @lc code=end


let res = minimumTotal([
    [1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]
]);
console.log(res);

