#
# @lc app=leetcode.cn id=432 lang=python3
#
# [432] 全 O(1) 的数据结构
#

# @lc code=start

# 定义双向节点
class Node:
    def __init__(self, cnt):
        # 该节点的计数值
        self.cnt = cnt
        # 记录该cnt(计数)下key包括哪些?
        self.keySet = set()
        # 前后指针
        self.prev = None
        self.next = None

class AllOne:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        # 记录头尾 便于求最小值最大值
        self.head = Node(float("-inf"))
        self.tail = Node(float("inf"))

        

    def inc(self, key: str) -> None:
        """
        Inserts a new key <Key> with value 1. Or increments an existing key by 1.
        """
        if key in self.map:
            self.map[key] += 1
        else:
            self.map[key] = 1

    def dec(self, key: str) -> None:
        """
        Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
        """
        if key in self.map:
            if self.map[key] == 1:
                del self.map[key]
            else:
                self.map[key] -= 1

    def getMaxKey(self) -> str:
        """
        Returns one of the keys with maximal value.
        """
        if not self.map:
            return ""
        else:
            return max(self.map, key=self.map.get)

    def getMinKey(self) -> str:
        """
        Returns one of the keys with Minimal value.
        """
        if not self.map:
            return ""
        else:
            return min(self.map, key=self.map.get)


# Your AllOne object will be instantiated and called as such:
# obj = AllOne()
# obj.inc(key)
# obj.dec(key)
# param_3 = obj.getMaxKey()
# param_4 = obj.getMinKey()
# @lc code=end
