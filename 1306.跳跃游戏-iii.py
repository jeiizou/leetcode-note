#
# @lc app=leetcode.cn id=1306 lang=python3
#
# [1306] 跳跃游戏 III
#

# @lc code=start
class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:
        if arr[start] == 0:
            return True
        n = len(arr)
        used = {start}
        q = [start]
        while q:
            u = q.pop(0)
            for v in [u+arr[u], u - arr[u]]:
                if 0 <= v < n and v not in used:
                    if arr[v] == 0:
                        return True
                    q.append(v)
                    used.add(v)

        return False
# @lc code=end
