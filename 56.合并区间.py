#
# @lc app=leetcode.cn id=56 lang=python3
#
# [56] 合并区间
#

from typing import List
# @lc code=start

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # 首先, 按照每个区域的开始位置的大小进行排序
        sorted_intervals = self.sort(intervals)
        res_intervals = [sorted_intervals[0]]
        for i in range(1, len(sorted_intervals)):
            if sorted_intervals[i][0] <= res_intervals[-1][1]:
                res_intervals[-1] = [
                    res_intervals[-1][0],
                    max(sorted_intervals[i][1], res_intervals[-1][1])
                ]
            else:
                res_intervals.append(sorted_intervals[i])
        return res_intervals

    def sort(self, intervals):
        n = len(intervals)
        if n < 1:
            return intervals
        currVal = intervals[0]
        leftList = []
        rightList = []
        for i in range(1, n):
            if intervals[i][0] > currVal[0]:
                rightList.append(intervals[i])
            else:
                leftList.append(intervals[i])
        return self.sort(leftList) + [currVal] + self.sort(rightList)

# @lc code=end


solution = Solution()
ans = solution.merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]])
# ans = solution.merge([[1, 4], [0, 4]])
# ans = solution.merge([[1, 4], [2, 3]])
print(ans)
