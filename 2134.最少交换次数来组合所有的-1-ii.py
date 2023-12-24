#
# @lc app=leetcode.cn id=2134 lang=python3
#
# [2134] 最少交换次数来组合所有的 1 II
#
from typing import List
# 想法:
# 1. 枚举出所有最终排序好的数字序列
# 2. 计算这些场景距离原始数据的变化位数
# 3. 取变化位数最少的值输出

# @lc code=start
class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n = len(nums)
        cnt = sum(nums)
        if cnt == 0:
            return 0
        
        cur = 0
        for i in range(cnt):
            cur += (1 - nums[i])
        
        ans = cur
        for i in range(1, n):
            if nums[i - 1] == 0:
                cur -= 1
            if nums[(i + cnt - 1) % n] == 0:
                cur += 1
            ans = min(ans, cur)
        return ans
# @lc code=end

sol = Solution()
res = sol.minSwaps([0,1,0,1,1,0,0])
print(res)