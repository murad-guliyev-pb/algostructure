/*
    Runtime: 76 ms, faster than 95.27% of JavaScript online submissions for Intersection of Two Arrays II.
    Memory Usage: 39.3 MB, less than 62.22% of JavaScript online submissions for Intersection of Two Arrays II.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const hashmap = {};
    const result = [];
    
    for(let i = 0; i < nums1.length; i++) {
        const el = nums1[i];
        if(hashmap[el]) {
            hashmap[el]++;
        } else {
            hashmap[el] = 1;
        }
    }
    
    for(let j = 0; j < nums2.length; j++) {
        const el = nums2[j];
        if(hashmap[el] >= 1) {
            result.push(el);
            hashmap[el]--;
        }
    }
    
    return result;
};