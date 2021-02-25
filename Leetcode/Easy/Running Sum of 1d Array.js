/*
    Runtime: 80 ms, faster than 74.82% of JavaScript online submissions for Running Sum of 1d Array.
    Memory Usage: 38.9 MB, less than 55.84% of JavaScript online submissions for Running Sum of 1d Array.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    
    return nums;
};