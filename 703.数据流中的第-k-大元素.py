#
# @lc app=leetcode.cn id=703 lang=python3
#
# [703] 数据流中的第 K 大元素
#
from typing import List
# @lc code=start


class KthLargest:
    sortedSum = []
    k = 0

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.sortedSum = []
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        isMin = True
        arrlen = len(self.sortedSum)
        for i in range(0, arrlen):
            if val > self.sortedSum[i]:
                self.sortedSum.insert(i, val)
                isMin = False
                break
        if isMin:
            self.sortedSum.append(val)
        self.sortedSum = self.sortedSum[0:self.k]

        if self.k <= len(self.sortedSum):
            return self.sortedSum[self.k - 1]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# @lc code=end


solution = KthLargest(3, [4, 5, 8, 2])

print(solution.add(3), solution.sortedSum)
print(solution.add(5), solution.sortedSum)
print(solution.add(10), solution.sortedSum)
print(solution.add(9), solution.sortedSum)
print(solution.add(4), solution.sortedSum)
