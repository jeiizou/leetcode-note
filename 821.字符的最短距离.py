#
# @lc app=leetcode.cn id=821 lang=python3
#
# [821] 字符的最短距离
#

from typing import List
# @lc code=start
class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        indexArr = []
        ansArr = []
        sl = len(s)
        for i in range(sl):
            if s[i] == c:
                indexArr.append(i)

        for i in range(sl):
            if s[i] == c:
                ansArr.append(0)
            else:
                min = sl
                for j in indexArr:
                    if abs(j - i) < min:
                        min = abs(j - i)
                ansArr.append(min)

        return ansArr


# @lc code=end

solution = Solution()
res = solution.shortestToChar('loveleetcode', 'e')
print(res)
