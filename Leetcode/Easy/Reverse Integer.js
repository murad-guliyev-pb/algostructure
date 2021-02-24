/*
    Runtime: 100 ms, faster than 34.86% of JavaScript online submissions for Reverse Integer.
    Memory Usage: 38.8 MB, less than 6.16% of JavaScript online submissions for Reverse Integer.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;
    let negative = false;
    
    if(x < 0) {
        negative = true;
        x *= -1;
    }
    
    while(x >= 1) {
        num = num * 10 + (x % 10) ;
        x = parseInt(x / 10);
    }
    
    if( num <= Math.pow(2, 31) * -1 || num >= Math.pow(2, 31) - 1 ) {
        return 0;
    }
    
    return negative ? num * -1 : num;
};