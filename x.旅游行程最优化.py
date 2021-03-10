# 旅游行程最优化

class Solution:
    def findScore(self, times, scores, n):
        f = [-1] * (n * 2)
        f[0] = 0
        for i in range(1, n * 2):
            for j in range(0, len(times)):
                resTime = int(i - times[j] * 2)
                if resTime >= 0 and f[resTime] != -1: 
                    f[i] = max(f[resTime] + scores[j], f[i])
        return f[2 * n - 1]


solution = Solution()
res = solution.findScore([0.5, 0.5, 1, 2, 0.5], [7, 6, 9, 9, 8], 2)
print(res)
