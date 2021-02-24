/* 
    Runtime: 112 ms, faster than 9.69% of JavaScript online submissions for Move Zeroes.
    Memory Usage: 39.7 MB, less than 97.39% of JavaScript online submissions for Move Zeroes.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    
    return nums;
};