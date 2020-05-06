/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    if (obstacleGrid[0].length < 1) {
        return 0;
    }

    let dp = [];
    for (let i = 0; i < obstacleGrid.length; i++) {
        dp[i] = [];
        for (let j = 0; j < obstacleGrid[i].length; j++) {
            const element = obstacleGrid[i][j];
            dp[i][j] = 0;
            if (i === 0 && j === 0 && obstacleGrid[i][j] !== 1) {
                dp[i][j] = 1;
            }
            if (element === 0) {
                if (i - 1 >= 0 && dp[i - 1][j]) {
                    dp[i][j] += dp[i - 1][j];
                }
                if (j - 1 >= 0 && dp[i][j - 1]) {
                    dp[i][j] += dp[i][j - 1];
                }
            }

            if (i === obstacleGrid.length - 1 && j === obstacleGrid[i].length - 1) {
                return dp[i][j];
            }
        }
    }
};
// @lc code=end

let res = uniquePathsWithObstacles([
    []
]);
console.log(res);