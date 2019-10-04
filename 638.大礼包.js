/*
 * @lc app=leetcode.cn id=638 lang=javascript
 *
 * [638] 大礼包
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */

let minSpend = 0;

var shoppingOffers = function(price, special, needs) {
    for (let i = 0; i < needs.length; i++) {
        minSpend += needs[i] * price[i];
    }

    chooseOffers(price, special, needs, 0, minSpend);
    return minSpend;
};

function checkValid(needs, spcial) {
    for (let i = 0; i < needs.length; ++i) {
        if (needs[i] - spcial[i] < 0) {
            return false;
        }
    }
    return true;
}

function choseAction(needs, spcial) {
    let temp = [];
    for (let i = 0; i < needs.length; i++) {
        temp.push(needs[i] - spcial[i]);
    }
    return temp;
}

function chooseOffers(price, spcial, needs, money) {
    for (let i = 0; i < spcial.length; i++) {
        const offer = spcial[i];
        if (checkValid(needs, offer)) {
            let temp_need = choseAction(needs, offer);
            chooseOffers(price, spcial, temp_need, money + offer[offer.length - 1]);
        }
    }

    for (let i = 0; i < needs.length; i++) {
        money += needs[i] * price[i];
    }
    if (money < minSpend) {
        minSpend = money;
    }
}

// let res = shoppingOffers([2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]);
// console.log(res);
// @lc code=end
