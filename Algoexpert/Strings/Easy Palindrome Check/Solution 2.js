// O(n) time | O(1) space
function isPalindrome(string) {
    // Write your code here.
      const lengthMinusOne = string.length - 1;
      for(let i = 0; i <= lengthMinusOne / 2; i++) {
          if(string[i] !== string[lengthMinusOne - i]) return false;
      }
      
      return true
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  