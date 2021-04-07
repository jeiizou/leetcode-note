#
# @lc app=leetcode.cn id=151 lang=python3
#
# [151] 翻转字符串里的单词
#

# @lc code=start
class Solution:
    def reverseWords(self, s: str) -> str:
        l = len(s)
        i = 0
        words = []
        while i < l:
            if s[i] == ' ':
                i += 1
                continue

            temp = ''
            j = i
            while j < l:
                if s[j] != ' ':
                    temp += s[j]
                else:
                    break
                j += 1
            i = j

            words = [temp] + words
        return  " ".join(words)


# @lc code=end

solution = Solution()
ans = solution.reverseWords('the sky is blue')
print(ans)
