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
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        isMin = True
        for i in range(0, len(self.sortedSum)):
            if val > self.sortedSum[i]:
                self.sortedSum.insert(i, val)
                isMin = False
                break
        if isMin:
            self.sortedSum.append(val)

        if self.k <= len(self.sortedSum):
            return self.sortedSum[self.k - 1]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# @lc code=end


solution = KthLargest(1, [])

print(solution.add(-3))
print(solution.add(-2))
print(solution.add(-4))
print(solution.add(0))
print(solution.add(4))
