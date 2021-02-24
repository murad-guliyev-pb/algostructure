/*
    Runtime: 92 ms, faster than 83.44% of JavaScript online submissions for Valid Palindrome.
    Memory Usage: 44.8 MB, less than 24.92% of JavaScript online submissions for Valid Palindrome.
/*

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    
    while(leftIndex < rightIndex) {
        const leftChar = s[leftIndex];
        const rightChar = s[rightIndex];
        
        if(!isChar(leftChar)) {
            leftIndex++;
            continue;
        }
        if(!isChar(rightChar)) {
            rightIndex--;
            continue;
        }
        
        if(leftChar.toLowerCase() !== rightChar.toLowerCase()) {
            return false;
        } else {
            leftIndex++;
            rightIndex--;
        }
    }
    
    return true;
};

const isChar = (s) => /[a-zA-Z0-9]/.test(s);