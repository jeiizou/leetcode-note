#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] x 的平方根
#

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        divisor = 1
        merchant = x
        while True:
            merchant = x / divisor
            if merchant > divisor:
                divisor = divisor * 2
            elif merchant == divisor:
                return int(merchant)
            else:
                break
        min = divisor / 2
        max = divisor
        while max > min:
            mid = (max + min) // 2
            if mid * mid <= x and (mid+1) * (mid + 1) > x:
                return int(mid)
            elif (mid + 1) * (mid + 1) < x:
                min = mid
            else:
                max = mid
        return None
# @lc code=end


solution = Solution()
print(solution.mySqrt(1))
print(solution.mySqrt(2))
print(solution.mySqrt(3))
print(solution.mySqrt(4))
print(solution.mySqrt(5))
print(solution.mySqrt(6))
print(solution.mySqrt(7))
print(solution.mySqrt(8))
print(solution.mySqrt(16))
print(solution.mySqrt(25))
