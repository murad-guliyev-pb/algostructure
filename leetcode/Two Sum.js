/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = [];
    for(let i=0; i<nums.length; i++) {
        if(arr.includes(nums[i])) {
            return [
                arr.indexOf(nums[i]),
                i
            ];
        }
        arr.push(target - nums[i]);
    }
};