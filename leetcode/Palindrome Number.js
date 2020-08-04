/*
    Runtime: 224 ms, faster than 51.26% of JavaScript online submissions for Palindrome Number.
    Memory Usage: 46 MB, less than 54.55% of JavaScript online submissions for Palindrome Number.
*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let num = 0;
    const initNum = x;
    
    while(x >= 1) {
        num = num * 10 + x % 10;
        x = parseInt(x / 10);
    }
    
    return num === initNum;
    
};