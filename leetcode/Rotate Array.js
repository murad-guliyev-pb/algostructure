/*
    Runtime: 116 ms, faster than 37.63% of JavaScript online submissions for Rotate Array.
    Memory Usage: 39.6 MB, less than 61.69% of JavaScript online submissions for Rotate Array.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};