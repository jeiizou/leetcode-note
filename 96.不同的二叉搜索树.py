#
# @lc app=leetcode.cn id=96 lang=python3
#
# [96] 不同的二叉搜索树
#

# @lc code=start
from typing import List


class Solution:
    nMap = {}
    def numTrees(self, n: int) -> int:
        if n == 0:
            return 0
        nArr = list(range(1, n + 1))
        return self.geneNode(nArr)
    
    def geneNode(self, arr: List[int]):
        arrKey = ','.join( list(map(str, sorted(arr))))
        if arrKey in self.nMap:
            return self.nMap[arrKey]
        if len(arr) <= 1:
            return 1
        count = 0
        for val in arr:
            leftArr =[]
            rightArr = []
            for curVal in arr:
                if curVal < val:
                    leftArr.append(curVal)
                elif curVal > val:
                    rightArr.append(curVal)
            
            cutTreeArr = self.geneNode(leftArr) * self.geneNode(rightArr)
            count += cutTreeArr
        self.nMap[arrKey] = count
        return count
# @lc code=end

sol = Solution()

print(sol.numTrees(3))