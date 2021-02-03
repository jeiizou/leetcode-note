#
# @lc app=leetcode.cn id=967 lang=python3
#
# [967] 连续差相同的数字
#

# @lc code=start
class Solution:
    def numsSameConsecDiff(self, n: int, k: int):
        arr = []
        def trav(l):
            nonlocal k
            if len(l) == n:
                arr.append(int(l))
                return
            endNum = int(l[-1])
            if k == 0:
                trav(l + str(endNum))
                return
            if endNum + k < 10:
                trav(l + str(endNum + k))
            if endNum - k >= 0:
                trav(l + str(endNum - k))
        for i in range(1, 10):
            trav(str(i))
        return arr
# @lc code=end


solution = Solution()
res = solution.numsSameConsecDiff(2, 0)
print(res)
