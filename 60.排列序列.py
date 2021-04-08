#
# @lc app=leetcode.cn id=60 lang=python3
#
# [60] 第k个排列
#

# @lc code=start
import math


class Solution:
    factorial_map = {
        1: 1
    }

    def getPermutation(self, n: int, k: int) -> str:
        n_list = [i + 1 for i in range(n)]
        ans = ''
        res_n = n
        res_k = k
        while len(ans) <= n:
            if res_n <= 1:
                ans += str(n_list[0])
                break
            num = math.ceil(res_k / self.getFact(res_n-1))
            y = res_k % self.getFact(res_n-1)
            ans += str(n_list[num - 1])
            n_list.remove(n_list[num - 1])
            res_n = res_n - 1
            res_k = y

        return ans

    def getFact(self, n: int) -> int:
        if n not in self.factorial_map:
            ans = n * self.getFact(n-1)
            self.factorial_map[n] = ans
        return self.factorial_map[n]
# @lc code=end


solution = Solution()
solution.getPermutation(3, 1)
solution.getPermutation(3, 2)
solution.getPermutation(3, 3)
solution.getPermutation(3, 4)
solution.getPermutation(3, 5)
solution.getPermutation(3, 6)
solution.getPermutation(4, 9)
