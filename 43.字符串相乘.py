#
# @lc app=leetcode.cn id=43 lang=python3
#
# [43] 字符串相乘
#

# @lc code=start
class Solution:
    # def multiply(self, num1: str, num2: str) -> str:
    #     if num1 == '0' or num2 == '0':
    #         return '0'

    #     w1, w2 = len(num1), len(num2)

    #     if w1 == 1:
    #         return self.singleMultiply(num1, num2)
    #     elif w2 == 1:
    #         return self.singleMultiply(num2, num1)

    #     m1, m2 = w1 >> 1, w2 >> 1

    #     a = [num1[0: m1], '0' * (w1 - m1)]
    #     b = [num1[m1:], '']
    #     c = [num2[0: m2], '0' * (w2 - m2)]
    #     d = [num2[m2:], '']
    #     r1 = self.multiply(a[0], c[0]) + a[1] + c[1]
    #     r2 = self.multiply(a[0], d[0]) + a[1] + d[1]
    #     r3 = self.multiply(b[0], c[0]) + b[1] + c[1]
    #     r4 = self.multiply(b[0], d[0]) + b[1] + d[1]
    #     return self.addStr(self.addStr(r3, r4), self.addStr(r1, r2))

    # def singleMultiply(self, sin, mut):
    #     cin = 0
    #     tsin = int(sin)
    #     ans = ''
    #     for i in range(len(mut)-1, -1, -1):
    #         res = int(mut[i]) * tsin + cin
    #         if res >= 10:
    #             res = str(res)
    #             cin = int(res[0])
    #             ans = res[1] + ans
    #         else:
    #             cin = 0
    #             ans = str(res) + ans
    #     if cin != 0:
    #         ans = str(cin) + ans
    #     return ans

    # def addStr(self, left, right):
    #     l1, l2 = len(left), len(right)
    #     max = l1
    #     if l1 < l2:
    #         max = l2
    #         left = '0'*(l2-l1)+left
    #     elif l2 < l1:
    #         right = '0'*(l1-l2)+right
    #     ans = ''
    #     cin = 0
    #     for i in range(max-1, -1, -1):
    #         res = int(left[i]) + int(right[i]) + cin
    #         if res >= 10:
    #             cin = 1
    #             ans = str(res-10) + ans
    #         else:
    #             cin = 0
    #             ans = str(res) + ans
    #     if cin != 0:
    #         ans = str(cin) + ans
    #     return ans
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == '0' or num2 == '0':
            return '0'

        m, n = len(num1), len(num2)
        ansArr = [0] * (m + n)
        for i in range(m-1, -1, -1):
            x = int(num1[i])
            for j in range(n-1, -1, -1):
                ansArr[i+j+1] += x * int(num2[j])
        for i in range(m+n-1,0,-1):
            ansArr[i - 1] += ansArr[i] // 10
            ansArr[i] %= 10
        
        index = 1 if ansArr[0] == 0 else 0
        ans = "".join(str(x) for x in ansArr[index:])
        return ans


# @lc code=end
sol = Solution()
ans = sol.multiply('5', '12')
print(ans)
