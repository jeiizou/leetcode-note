#
# @lc app=leetcode.cn id=215 lang=python3
#
# [215] 数组中的第K个最大元素
#
from typing import List
# @lc code=start


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        if not nums:
            return None
        for i in range(len(nums)):
            maxIndex = i
            for j in range(i + 1, len(nums)):
                if nums[j] > nums[maxIndex]:
                    maxIndex = j
            if i != maxIndex:
                curVal = nums[i]
                nums[i] = nums[maxIndex]
                nums[maxIndex] = curVal
            if i+1 == k:
                return nums[i]

        return nums[k]

# @lc code=end


solution = Solution()
res = solution.findKthLargest([3, 2, 1, 5, 6, 4], 3)
print(res)
