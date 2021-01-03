/* 
    Runtime: 84 ms, faster than 55.53% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
    Memory Usage: 39.2 MB, less than 50.35% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const length = prices.length;
    let current = prices[0];
    let sum = 0;
    
    for(let i = 1; i < length; i++) {
        if(prices[i] < current) {
             current = prices[i];
        } else if(
            (prices[i] > current) &&
            (!prices[i+1] || prices[i+1] < prices[i])
        ){
            sum += (prices[i] - current);
            current = prices[i];
        }
    }
    
    return sum;
};