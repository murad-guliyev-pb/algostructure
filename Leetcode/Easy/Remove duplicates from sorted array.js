/*
    Runtime: 100 ms, faster than 57.02% of JavaScript online submissions for Remove Duplicates from Sorted Array.
    Memory Usage: 38.8 MB, less than 77.10% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i< nums.length;) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1, 1)
        } else {
            i++;
        }
    }
    
    return nums.length;
};