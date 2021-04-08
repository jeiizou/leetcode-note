#
# @lc app=leetcode.cn id=674 lang=python3
#
# [674] 最长连续递增序列
#
from typing import List

# @lc code=start


class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        maxLength = 1
        tempLength = 1
        n = len(nums)
        for i in range(1, n):
            if nums[i] > nums[i-1]:
                tempLength += 1
                if i + 1 >= n:
                    maxLength = max(maxLength, tempLength)
            else:
                maxLength = max(maxLength, tempLength)
                tempLength = 1
        return maxLength
# @lc code=end


s = Solution()
ans = s.findLengthOfLCIS([1, 3, 5, 7])
print(ans)
