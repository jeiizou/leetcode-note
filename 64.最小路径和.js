/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (grid[0].length < 1) {
        return 0
    }

    let dp = []
    for (let i = 0; i < grid.length; i++) {
        dp[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            let val = grid[i][j];

            if (i === 0 & j === 0) {
                dp[i][j] = val;
            } else {
                let min = Infinity;
                if (i - 1 >= 0 && dp[i - 1][j] < min) {
                    min = dp[i - 1][j]
                }

                if (j - 1 >= 0 && dp[i][j - 1] < min) {
                    min = dp[i][j - 1]
                }

                dp[i][j] = val + min;
            }

            if (i === grid.length - 1 && j === grid[i].length - 1) {
                return dp[i][j];
            }
        }
    }
};
// @lc code=end
console.log(minPathSum([
    []
]));
