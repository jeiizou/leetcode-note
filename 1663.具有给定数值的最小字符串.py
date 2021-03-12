#
# @lc app=leetcode.cn id=1663 lang=python3
#
# [1663] 具有给定数值的最小字符串
#

# @lc code=start
class Solution:
    charmap = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
               'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    def getSmallestString(self, n: int, k: int) -> str:
        rv = k
        ans = ''
        for rl in range(n, 0, -1):
            if rl == 1:
                ans += self.charmap[rv - 1]
                continue
            if 26 * (rl-1) < rv and rv > 26:
                index = rv - 26 * (rl - 1)
                ans += self.charmap[index - 1]
                rv -= index
            else:
                ans += 'a'
                rv -= 1
        return ans

# @lc code=end


solution = Solution()
res = solution.getSmallestString(3, 27)
print(res)
