#
# @lc app=leetcode.cn id=567 lang=python3
#
# [567] 字符串的排列
#

# @lc code=start
class Solution:
    # 滑动窗口
    # def checkInclusion(self, s1: str, s2: str) -> bool:
    #     n, m = len(s1), len(s2)
    #     if n > m:
    #         return False
    #     cnt = [0] * 26
    #     aIdx = ord('a')
    #     for i in range(0, n):
    #         idx1 = ord(s1[i]) - aIdx
    #         idx2 = ord(s2[i]) - aIdx
    #         cnt[idx1] -= 1
    #         cnt[idx2] += 1
    #     diff = 0
    #     for c in cnt:
    #         if c != 0:
    #             diff += 1

    #     if diff == 0:
    #         return True

    #     for i in range(n, m):
    #         x = ord(s2[i]) - aIdx
    #         y = ord(s2[i - n]) - aIdx
    #         print(x, y)
    #         print(s2[i], s2[i-n])
    #         if x == y:
    #             continue
    #         if cnt[x] == 0:
    #             diff += 1
    #         cnt[x] += 1
    #         if cnt[x] == 0:
    #             diff -= 1
    #         if cnt[y] == 0:
    #             diff += 1
    #         cnt[y] -= 1
    #         if cnt[y] == 0:
    #             diff -= 1

    #         if diff == 0:
    #             return True

    #     return False

    def checkInclusion(self, s1: str, s2: str) -> bool:
        n, m = len(s1), len(s2)
        if n > m:
            return False
        cnt = [0] * 26
        aIdx = ord('a')
        for i in range(0, n):
            cnt[ord(s1[i]) - aIdx] -= 1
        left = 0
        for right in range(0, m):
            x = ord(s2[right]) - aIdx
            cnt[x] += 1
            while cnt[x] > 0:
                cnt[ord(s2[left]) - aIdx] -= 1
                left += 1
            if right - left + 1 == n:
                return True
        return False


# @lc code=end
solution = Solution()

ans = solution.checkInclusion("ab", "eidbaooo")
print(ans)
