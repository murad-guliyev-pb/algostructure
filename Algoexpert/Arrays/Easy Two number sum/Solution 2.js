// O(n^2) time | O(1) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i = 0; i < array.length; i++) {
          for(let j = 0; j < i; j++) {
              if(array[i] + array[j] === targetSum) {
                  return [array[j], array[i]];
              }
          }
      }
      
      return [];
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  