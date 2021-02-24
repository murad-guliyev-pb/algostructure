/*
    Runtime: 76 ms, faster than 46.68% of JavaScript online submissions for Remove Element.
    Memory Usage: 36.3 MB, less than 5.63% of JavaScript online submissions for Remove Element.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i=0; i<nums.length;) {
        if(nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++
        }
    }
    
    return nums.length;
};


// -----------------------------------------------------------------------------------------------------


/*
    Runtime: 76 ms, faster than 46.68% of JavaScript online submissions for Remove Element.
    Memory Usage: 36.3 MB, less than 5.63% of JavaScript online submissions for Remove Element.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    
    return nums.length;
};