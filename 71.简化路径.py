#
# @lc app=leetcode.cn id=71 lang=python3
#
# [71] 简化路径
#

# @lc code=start
class Solution:
    def simplifyPath(self, path: str) -> str:
        # 分割
        pathList = path.split('/')
        ans = []
        # 栈
        for name in pathList:
            if not name:
                continue
            else:
                if name == '..':
                    if len(ans) > 0:
                        ans.pop(-1)
                elif name == '.':
                    continue
                else:
                    ans.append(name)
        return '/' + '/'.join(ans)
# @lc code=end

solution = Solution()
ans = solution.simplifyPath('/../')
print(ans)