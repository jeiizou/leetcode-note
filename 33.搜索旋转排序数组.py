#
# @lc app=leetcode.cn id=33 lang=python3
#
# [33] 搜索旋转排序数组
#
from typing import List

# @lc code=start


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1

        max = len(nums) - 1
        min = 0
        while max >= min:
            mid = (max + min) // 2
            if nums[mid] == target:
                return mid
            if max - min <= 1:
                return max if nums[max] == target else -1

            #   |
            # ---- | ----
            if nums[mid] >= nums[0]:
                if target >= nums[0] and target <= nums[mid]:
                    max = mid
                else:
                    min = mid
            #         |
            # ---- | ----
            if nums[mid] < nums[0]:
                if target < nums[0] and target >= nums[mid]:
                    min = mid
                else:
                    max = mid

        return -1


# @lc code=end
sol = Solution()
ans = sol.search([5, 1, 3], 5)
# ans = sol.search([4,5,6,7,0,1,2], 4)
print(ans)
