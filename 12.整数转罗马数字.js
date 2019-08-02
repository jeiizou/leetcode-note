/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let map = {
        '5': 'V',
        '50': 'L',
        '500': 'D',
        '4': 'IV',
        '9': 'IX',
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM'
    };
    let inter = {
        '1': 'I',
        '10': 'X',
        '100': 'C',
        '1000': 'M'
    };
    if (num < 1 || num > 3999) {
        return 'unable number';
    }

    let bit_flag = 1;
    let str = '';
    while (num > 0) {
        let res = num % 10;
        num = (num / 10) | 0;
        if (res !== 0) {
            if (map[res * bit_flag]) {
                str = map[res * bit_flag] + str;
            } else {
                let t_s = '';
                if (res > 5) {
                    t_s += map[bit_flag * 5];
                    res = res - 5;
                }
                while (res) {
                    t_s += inter[bit_flag];
                    res--;
                }
                str = t_s + str;
            }
        }
        bit_flag *= 10;
    }

    return str;
};

// console.log(intToRoman(1234));
