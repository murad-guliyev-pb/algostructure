/*
    Runtime: 72 ms, faster than 94.34% of JavaScript online submissions for Plus One.
    Memory Usage: 38.7 MB, less than 25.24% of JavaScript online submissions for Plus One.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const length = digits.length;
    for(let i = length - 1; i >= 0; i--) {
        if(digits[i] !== 9) {
            digits[i] += 1;
            break;
        }
        
        digits[i] = 0;
        
        if(i === 0) {
            digits.unshift(1);
        }
    }
       
    return digits
};