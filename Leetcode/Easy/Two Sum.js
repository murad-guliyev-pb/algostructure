/*
    Runtime: 168 ms, faster than 23.45% of JavaScript online submissions for Two Sum.
    Memory Usage: 37.5 MB, less than 21.42% of JavaScript online submissions for Two Sum.
/*

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