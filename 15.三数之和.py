#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#
from typing import List
# @lc code=start


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        rtn = []
        # 先排序
        nums.sort()
        # 枚举 a
        for i in range(0, n):
            # 需要与前一次不同
            if i > 0 and nums[i] == nums[i-1]:
                continue
            # c 指针指向数组的最右端
            k = n -1
            target = -nums[i]
            for j in range(i + 1, n):
                # 需要与上一次枚举的数不同
                if j > i + 1 and nums[j] == nums[j -1 ]:
                    continue
                while j < k and nums[j] + nums[k] > target:
                    k -= 1
                # 如果指针重合，随着 b 后续的增加
                # 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
                if j == k:
                    break;
                if nums[j] + nums[k] == target:
                    rtn.append([nums[i], nums[j], nums[k]])
        return rtn

# @lc code=end


sol = Solution()
res = sol.threeSum([-1,0,1,2,-1,-4])
print(res)
