/*
    Runtime: 80 ms, faster than 43.81% of JavaScript online submissions for Length of Last Word.
    Memory Usage: 38.8 MB, less than 5.01% of JavaScript online submissions for Length of Last Word.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
    
    return words[words.length - 1].length;
};


// -----------------------------------------------------------------------------------------------------


/*
    Runtime: 80 ms, faster than 43.81% of JavaScript online submissions for Length of Last Word.
    Memory Usage: 38.7 MB, less than 5.01% of JavaScript online submissions for Length of Last Word.
/*

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === " ") {
            if(lastWordLength > 0) {
                return lastWordLength;   
            }
        } else {
            lastWordLength++;
        }
    }
    
    return lastWordLength;
};