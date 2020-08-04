/*
    Runtime: 80 ms, faster than 35.27% of JavaScript online submissions for Valid Parentheses.
    Memory Usage: 36.7 MB, less than 36.42% of JavaScript online submissions for Valid Parentheses.
/*


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const characters = {
        "(": ")",
        "{": "}",
        "[": "]",
    } 
    const result = [];
    
    for(let i=0; i< s.length; i++) {
        
        if(characters.hasOwnProperty(s[i])) {
            result.unshift(characters[s[i]])
        } else if(result[0] === s[i]) {
            result.shift();
        } else {
            return false
        }
    }
    
    return result.length === 0;
    
};