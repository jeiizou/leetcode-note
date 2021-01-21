#
# @lc app=leetcode.cn id=297 lang=python3
#
# [297] 二叉树的序列化与反序列化
#

class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return ''

        que = [root]
        resQue = []
        while que:
            node = que.pop(0)
            resQue.append(str(node.val) if node else 'null')
            if node:
                que.append(node.left)
                que.append(node.right)
        findex = len(resQue)
        for i in range(len(resQue)-1, -1, -1):
            if resQue[i] != 'null':
                findex = i
                break
        return ','.join(resQue[:findex+1])
        # return resQue

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        if not data:
            return None;

        que = data.split(',')
        root = TreeNode(que.pop(0))
        nodeList = [root]
        while nodeList and que:
            cueNode = nodeList.pop(0)
            if que:
                val = que.pop(0)
                if val != 'null':
                    cueNode.left = TreeNode(val)
                    nodeList.append(cueNode.left)
                if que:
                    val = que.pop(0)
                    if val != 'null':
                        cueNode.right = TreeNode(val)
                        nodeList.append(cueNode.right)

        return root

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
# @lc code=end


codec = Codec()
tree = codec.deserialize('1,2')
print(tree)
deque = codec.serialize(tree)
print(deque)
