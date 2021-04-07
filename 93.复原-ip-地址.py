#
# @lc app=leetcode.cn id=93 lang=python3
#
# [93] 复原IP地址
#
from typing import List
# @lc code=start


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        ans = []

        def restore(slist, rs):
            nonlocal ans
            if len(rs) <= 0 and len(slist) == 4:
                ans.append('.'.join(slist))
                return

            if len(slist) > 4 or len(rs) == 0:
                return

            i = 0
            str = ''
            while i < len(rs):
                str += rs[i]
                if len(str) > 1 and str[0] == '0':
                    break
                if int(str) > 255:
                    break
                i += 1
                restore(slist+[str], rs[i:])

        restore([], s)
        return ans


# @lc code=end

solution = Solution()
ans = solution.restoreIpAddresses('25525511135')
print(ans)
