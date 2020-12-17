/*
    Runtime: 120 ms, faster than 6.78% of JavaScript online submissions for Climbing Stairs.
    Memory Usage: 37.8 MB, less than 97.27% of JavaScript online submissions for Climbing Stairs.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let temp = 0;
    let prev = 1;
    let res = 1;
    
    for(let i = 1; i < n; i++) {
        temp = res;
        res += prev;
        prev = temp;
    }
    
    return res;
    
};