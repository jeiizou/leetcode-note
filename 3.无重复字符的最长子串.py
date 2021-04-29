#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # 滑动窗口
        # 定义快慢指针
        fast = low = 0
        charMap = {}
        maxLength = 0
        while fast < len(s):
            # 当前字符发生重复
            if s[fast] in charMap:
                # 获取重复的下标
                idx = charMap[s[fast]]
                # 删除这段路径中的字符
                for i in range(low, idx + 1):
                    del charMap[s[i]]
                # 将尾指针指向该边界的下一个
                low = idx + 1
            # 记录当前字符
            charMap[s[fast]] = fast
            fast = fast + 1
            if fast - low > maxLength:
                maxLength = fast - low
        return maxLength
# @lc code=end


solution = Solution()
res = solution.lengthOfLongestSubstring('')
print(res)
