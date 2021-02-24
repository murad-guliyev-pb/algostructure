/*
    Runtime: 68 ms, faster than 84.04% of JavaScript online submissions for Implement strStr().
    Memory Usage: 37 MB, less than 44.68% of JavaScript online submissions for Implement strStr().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


// -----------------------------------------------------------------------------------------------------


/*
    Runtime: 108 ms, faster than 24.64% of JavaScript online submissions for Implement strStr().
    Memory Usage: 38.7 MB, less than 10.22% of JavaScript online submissions for Implement strStr().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    
    let currIndex = haystack.indexOf(needle[0]);
    
    while(currIndex !== -1) {
        if(haystack.substring(currIndex, currIndex + needle.length) === needle) {
            return currIndex;
        } else {
            currIndex = haystack.indexOf(needle[0], currIndex + 1);
        }
    }
    
    return -1;
};


// -----------------------------------------------------------------------------------------------------


/*
    Runtime: 3500 ms, faster than 7.00% of JavaScript online submissions for Implement strStr().
    Memory Usage: 37.6 MB, less than 26.81% of JavaScript online submissions for Implement strStr().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === "") return 0;
    
    let index = -1;
    
    for(let i = 0; i< haystack.length; i++) {
        if(index !== -1) break;
        
        for(let j = 0; j < needle.length; j++) {
            if(haystack[i + j] !== needle[j]) {
                break;
            }
            if(j === needle.length - 1) {
                index = i
            }
        }
    }
    
    return index;
};