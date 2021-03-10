#
# @lc app=leetcode.cn id=743 lang=python3
#
# [743] 网络延迟时间
#

# @lc code=start
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        dist = {i: float('inf') for i in range(1, n + 1)}
        dist[k] = 0
        res = {}
        while dist:
            # 找数组中的最小值
            min_dis = min(dist.values())
            # 最小值为无穷大
            if min_dis == float('inf'):
                return -1
                
            for key, v in dist.items():
                if v == min_dis:
                    ind = key
            for time in times:
                if time[0] == ind and time[1] not in res.keys():
                    dist[time[1]] = min(dist[time[1]], dist[time[0]]+time[2])
            res[ind] = min_dis
            dist.pop(ind)
        return max(res.values())
# @lc code=end
