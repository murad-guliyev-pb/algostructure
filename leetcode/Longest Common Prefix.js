/*
    Runtime: 72 ms, faster than 80.13% of JavaScript online submissions for Longest Common Prefix.
    Memory Usage: 36.8 MB, less than 64.57% of JavaScript online submissions for Longest Common Prefix.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word = strs[0] ?? "";
    
    for(let i=1; i<strs.length; i++) {
        while(word != "") {
            if(strs[i].substring(0, word.length).includes(word)) {
                break;
            }
            word = word.slice(0,-1);
        }
    }
    
    return word;
};