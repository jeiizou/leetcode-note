#
# @lc app=leetcode.cn id=300 lang=python3
#
# [300] 最长递增子序列
#
from typing import List

# @lc code=start


class Solution:
    # 动态规划思路
    # def lengthOfLIS(self, nums: List[int]) -> int:
    #     if not nums:
    #         return 0
    #     f = [1] * len(nums)
    #     for i in range(1, len(nums)):
    #         for j in range(0, i):
    #             if nums[i] > nums[j]:
    #                 f[i] = max(f[i], f[j] + 1)
    #     return max(f)

    # 贪心 + 二分
    def lengthOfLIS(self, nums: List[int]) -> int:
        d = []
        for n in nums:
            if not d or n > d[-1]:
                d.append(n)
            else:
                l, r = 0, len(d) - 1
                loc = r
                while l <= r:
                    mid = (l+r) // 2
                    if d[mid] >= n:
                        loc = mid
                        r = mid + 1
                    else:
                        l = mid + 1
                d[loc] = n
        return len(d)


# @lc code=end
solution = Solution()
res = solution.lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])
print(res)
