/* 
    Runtime: 480 ms, faster than 7.92% of JavaScript online submissions for Single Number.
    Memory Usage: 40.4 MB, less than 81.75% of JavaScript online submissions for Single Number.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const length = nums.length;
    let duplicateIndex;
    
    for(let i = 0; i < length; i++) {
        duplicateIndex = nums.indexOf(nums[i]);
        
        if(duplicateIndex > -1 && duplicateIndex < i) {
            nums[duplicateIndex] = undefined;
            nums[i] = undefined;
        }
    }
    
    for(let j=0; j< length; j++) {
        if(nums[j] !== undefined) return nums[j];
    }
    
};