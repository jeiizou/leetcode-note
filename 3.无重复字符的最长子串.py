#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # 定义快慢指针
        fast = low = 0
        charMap = {}
        maxLength = 0
        while fast < len(s):
            if s[fast] in charMap:
                idx = charMap[s[fast]]
                for i in range(low, idx + 1):
                    del charMap[s[i]]
                low = idx + 1

            charMap[s[fast]] = fast
            fast = fast + 1
            if fast - low > maxLength:
                maxLength = fast - low
        return maxLength
# @lc code=end


solution = Solution()
res = solution.lengthOfLongestSubstring('')
print(res)
