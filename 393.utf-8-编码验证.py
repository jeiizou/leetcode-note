#
# @lc app=leetcode.cn id=393 lang=python3
#
# [393] UTF-8 编码验证
#

from typing import List
# @lc code=start


class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        strs: List[str] = []
        for num in data:
            strs.append(str(format(num, 'b')).zfill(8))
        flag = 0
        for curStr in strs:
            if flag == 0:
                for i in curStr:
                    if i == '0':
                        break
                    else:
                        flag += 1
                if flag == 1 or flag > 4:
                    return False
                if flag > 1:
                    flag -= 1
            else:
                if curStr.startswith('10'):
                    flag -= 1
                else:
                    return False
        return flag == 0


# @lc code=end
solution = Solution()
ans = solution.validUtf8([250, 145, 145, 145, 145])
print(ans)
