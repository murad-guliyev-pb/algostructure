/*
    Runtime: 120 ms, faster than 54.56% of JavaScript online submissions for First Unique Character in a String.
    Memory Usage: 42.8 MB, less than 32.92% of JavaScript online submissions for First Unique Character in a String.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashmap = {};
    
    for(let i = 0; i < s.length; i++) {
        if(!hashmap.hasOwnProperty(s[i])) {
            hashmap[s[i]] = i;  
        } else {
            hashmap[s[i]] = -1;
        }
    }
    console.log(hashmap);
    for(let key in hashmap) {
        if(hashmap[key] !== -1) return hashmap[key];
    }
    
    return -1;
};