/*
    Runtime: 140 ms, faster than 45.87% of JavaScript online submissions for Longest Substring Without Repeating Characters.
    Memory Usage: 45 MB, less than 35.18% of JavaScript online submissions for Longest Substring Without Repeating
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubtStr = 0;
    let leftIndex = 0;
    const charsInSubStr = {};
    
    for(let i = 0; i < s.length; i++) {
        if(charsInSubStr[s[i]]) {
            while(charsInSubStr[s[i]]) {
                charsInSubStr[s[leftIndex]] = undefined;
                leftIndex++;
            }
        } 
        
        longestSubtStr = Math.max(longestSubtStr, (i - leftIndex) + 1);
        charsInSubStr[s[i]] = 1;
    }
    
    return longestSubtStr;
};