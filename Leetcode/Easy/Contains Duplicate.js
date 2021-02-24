/*
    Runtime: 96 ms, faster than 42.07% of JavaScript online submissions for Contains Duplicate.
    Memory Usage: 46.4 MB, less than 29.97% of JavaScript online submissions for Contains Duplicate.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const length = nums.length;
    const map = {};
    for(let i = 0; i < length; i++) {
        if(map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    
    return false;
};