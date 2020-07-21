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