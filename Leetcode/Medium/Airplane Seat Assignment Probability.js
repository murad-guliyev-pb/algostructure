/*
    Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Airplane Seat Assignment Probability.
    Memory Usage: 38.7 MB, less than 8.33% of JavaScript online submissions for Airplane Seat Assignment Probability.
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
    if(n === 1) return 1;
    
    return 1/2;
};
