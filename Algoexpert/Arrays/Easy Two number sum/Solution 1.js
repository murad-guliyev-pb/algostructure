// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
    // Write your code here.
      const diff = [];
      const length = array.length;
      
      for(let i = 0; i < length; i++) {
          if(diff.includes(array[i])) {
              return [array[i], targetSum - array[i]]
          }
          
          diff.push(targetSum - array[i]);
      }
      
      return [];
      
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  