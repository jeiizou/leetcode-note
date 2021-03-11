#
# @lc app=leetcode.cn id=678 lang=python3
#
# [678] 有效的括号字符串
#

# @lc code=start
class Solution:
    def checkValidString(self, s: str) -> bool:
        lo = hi = 0
        for c in s:
            if c == '(':
                lo += 1
                hi += 1
            elif c == '*':
                if lo > 0:
                    lo -= 1
                hi += 1
            else:
                if lo > 0:
                    lo -= 1
                hi -= 1
            if hi < 0:
                return False
        return lo == 0

# @lc code=end
