#
# @lc app=leetcode.cn id=449 lang=python3
#
# [449] 序列化和反序列化二叉搜索树
#

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Codec:
    # 先序遍历
    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        if not root:
            return ''
        strArr = []

        def preOrder(node: TreeNode):
            if node:
                strArr.append(str(node.val))
                if node.left or node.right:
                    preOrder(node.left)
                    preOrder(node.right)
            else:
                strArr.append('null')
        preOrder(root)
        return ','.join(strArr)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        if not data:
            return None
        que = data.split(',')

        def buildTree(arr):
            if not arr:
                return None
            curVal = arr.pop(0)
            if curVal == 'null':
                return None

            node = TreeNode(curVal)
            mid = 0
            for i in range(len(arr)):
                if arr[i] == 'null':
                    mid = i
                elif float(arr[i]) >= float(curVal):
                    mid = i
                    break
            node.left = buildTree(arr[:mid])
            node.right = buildTree(arr[mid:])
            return node
        return buildTree(que)


# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans
# @lc code=end


codec = Codec()
tree = codec.deserialize('3,2,1,null,4')
str = codec.serialize(tree)
print(tree)
print(str)
