/*
    Runtime: 92 ms, faster than 32.22% of JavaScript online submissions for Maximum Subarray.
    Memory Usage: 39.1 MB, less than 5.83% of JavaScript online submissions for Maximum Subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    
    for(let i=1; i<nums.length; i++) {
        if(currSum < 0 && nums[i] > currSum) {
            currSum = nums[i];
        } else {
            currSum += nums[i];    
        }
        
        if(currSum > maxSum) {
            maxSum = currSum;
        }
    }
    
    return maxSum;
};