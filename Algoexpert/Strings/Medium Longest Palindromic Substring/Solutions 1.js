// O(n^3) time | O(n) space
function longestPalindromicSubstring(string) {
    // Write your code here.
    let result = '';
    
    for(let i = 0; i < string.length; i++) {
        for(let j = i; j < string.length; j++) {
            if(string[j] === string[i]) {
                if(isSubstringPalindrome(i, j, string) && result.length <= j - i) {
                    result = string.slice(i, j + 1)
                }
            }
        }
    }
    
    return result;
}
  
function isSubstringPalindrome(i, j, string) {
    let leftIndex = i;
    let rightIndex = j;

    while(leftIndex < rightIndex) {
        if(string[leftIndex] !== string[rightIndex]){
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    
    return true;
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
  