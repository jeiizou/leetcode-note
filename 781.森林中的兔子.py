#
# @lc app=leetcode.cn id=781 lang=python3
#
# [781] 森林中的兔子
#
import math
# @lc code=start


class Solution:
    def numRabbits(self, answers) -> int:
        g = {}
        for ans in answers:
            if ans in g:
                g[ans] += 1
            else:
                g[ans] = 1
        sum = 0
        for i in g:
            if i == 0:
                sum += g[i]
            else:
                sum += math.ceil(g[i] / (i+1)) * (i+1)
        return sum

# @lc code=end


solution = Solution()
res = solution.numRabbits([3, 3, 3, 3, 1, 3])
print(res)
