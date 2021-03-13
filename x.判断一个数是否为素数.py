import math


class Solution:
    def isprime(num: int):
        if num == 2 or num == 3:
            return 1
        if num % 6 != 1 and num % 6 != 5:
            return 0
        tem = math.sqrt(num)
        for i in range(5, tem + 1, 6):
            if num % i == 0 or num % (i + 2) == 0:
                return 0
        return 1
